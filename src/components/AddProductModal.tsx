'use client';

import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import axios from 'axios';

const AddProductModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const raw_image = data.img[0];
    const formData = new FormData();

    formData.append('file', raw_image);
    formData.append('upload_preset', 'nextjsEcommerce');

    try {
      setIsLoading(true);
      const uploadResponse = await axios.post(
        'https://api.cloudinary.com/v1_1/dbkenzbif/image/upload',
        formData
      );

      if (!uploadResponse.data) {
        throw new Error('Something went wrong!');
      }

      const imageUrl = uploadResponse.data.secure_url;

      const productData = { ...data, img: imageUrl };

      await axios.post('/api/products', productData);

      reset();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg">
        <h1>Add New Product</h1>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <label htmlFor="title">Name</label>
            <input
              {...register('title', { required: true })}
              className="border-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="desc">Description</label>
            <textarea
              {...register('desc', { required: true })}
              className="border-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              {...register('price', { required: true, valueAsNumber: true })}
              className="border-2"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            {...register('img', { required: true })}
            className="border-2"
          />

          <select
            {...register('category', { required: true })}
            className="border-2"
          >
            <option value="rice">Rice</option>
            <option value="noodle">Noodle</option>
            <option value="chicken">Chicken</option>
            <option value="drinks">Drinks</option>
          </select>

          <button className="bg-blue-500" type="submit">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductModal;
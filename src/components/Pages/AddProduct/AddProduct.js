import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const AddProduct = () => {

	const { user, loading, logUser } = useContext(AuthContext);
	// console.log(logUser.name);



	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();



		//! from .env.local file====>
		const imgHostKey = process.env.REACT_APP_Imgbb_key;
		// console.log(imgHostKey);
	
	
	
	


	const handleAddedProduct = (data) => {
		const image = data.img

		// console.log(image);





		//! --------1----------

		const formData = new FormData()
	  
		formData.append('image', image[0])

		// console.log(formData)		
		
		const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
		fetch(url, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((imgData) => {
				// console.log(imgData);
				if (imgData.success) {
					console.log(imgData.data.url)



                 //! ------2------------
					if (image[1]) {
					

						const formData = new FormData()
	  
						formData.append('image', image[1])
				
						// console.log(formData)		
						
						const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
						fetch(url, {
							method: 'POST',
							body: formData,
						})
							.then((res) => res.json())
							.then((imgData1) => {
								// console.log(imgData1);
								if (imgData1.success) {
									// console.log(imgData1.data.url)
	
					//! ------3------------
					if (image[2]) {
					

						const formData = new FormData()
	  
						formData.append('image', image[2])
				
						// console.log(formData)		
						
						const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
						fetch(url, {
							method: 'POST',
							body: formData,
						})
							.then((res) => res.json())
							.then((imgData2) => {
								// console.log(imgData2);
								if (imgData2.success) {
									// console.log(imgData2.data.url)
	
									const addedProduct = {
										author: logUser.name,
										email: user.email,
										title: data.title,
										category: data.category,
										price: data.price,
										description: data.description,
										image: imgData.data.url,
										image2: imgData1.data.url,
										image3: imgData2.data.url,
										
									};
									

					//! Save addedProducts info to the database....
					fetch('http://localhost:5000/products', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(addedProduct),
					})
						.then((res) => res.json())
						.then((result) => {
							// console.log(result);
							toast('Successfully created a new Product!!');
						});
									
								}
							});	



					}
					else {
						const addedProduct = {
							author: logUser.name,
							email: user.email,
							title: data.title,
							category: data.category,
							price: data.price,
							description: data.description,
							image: imgData.data.url,
							image2: imgData1.data.url,
							
						};
						

					//! Save addedProducts info to the database....
					fetch('http://localhost:5000/products', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(addedProduct),
					})
						.then((res) => res.json())
						.then((result) => {
							// console.log(result);
							toast('Successfully created a new Product!!');
						});
					}
            //!=============<3>===END=====

									
								}
							});	



					}
					else {
						const addedProduct = {
							author: logUser.name,
							email: user.email,
							title: data.title,
							category: data.category,
							price: data.price,
							description: data.description,
							image: imgData.data.url,
							
						};
						
						

					//! Save addedProducts info to the database....
					fetch('http://localhost:5000/products', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(addedProduct),
					})
						.then((res) => res.json())
						.then((result) => {
							// console.log(result);
							toast('Successfully created a new Product!!');
						});



					}
					

            //!=============<1>===END=====

				}
			});
	};


	// if (loading) {
	// 	return <Loader></Loader>
	// }


    return (
        <div className='bg-base-200'>
			<br />
			<h1 className='mb-5 text-2xl'>Add Your Product</h1>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content grid grid-cols-1 lg:grid-cols-2-col'>
					<div className='card grid grid-cols-1 lg:grid-cols-2-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form
							onSubmit={handleSubmit(handleAddedProduct)}
							className='card-body'
						>
							
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Product Title</span>
									</label>
									<input
										type='text'
										{...register('title', {
											required: 'Title is Required',
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.title && (
										<p className='text-red-500'>{errors.title?.message}</p>
									)}
								</div>
								
							
							
								
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Categories</span>
									</label>
									<select
										{...register('category', {
											required: 'Category is Required',
										})}
										className='select input-bordered w-full max-w-xs'
									>
										<option disabled>Choose Category</option>
										<option>Chinese</option>
										<option>Drinks</option>
										<option>Rice</option>
										<option>Chicken</option>
									</select>
									{errors.category && (
										<p className='text-red-500'>{errors.category.message}</p>
									)}
								</div>
							
							
								
								<div className='form-control w-full max-w-xs'>
									<label className='label'>
										<span className='label-text'>Price : (Dollar)</span>
									</label>
									<input
										type='number'
										{...register('price', {
											required: 'Price is Required',
										})}
										className='input input-bordered w-full max-w-xs'
									/>
									{errors.price && (
										<p className='text-red-500'>
											{errors.price.message}
										</p>
									)}
								</div>
							
							
							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Description</span>
								</label>
								<input
									type='text'
									{...register('description', {
										required: 'Description is Required',
									})}
									className='input input-bordered w-full max-w-xs'
								/>
								{errors.description && (
									<p className='text-red-500'>{errors.description.message}</p>
								)}
							</div>
							<div className='form-control group w-full max-w-xs'>
								<label className='label'>
									<h3 className='label-text'>Choose from Album <span className='text-white group-hover:text-blue-600 group-hover:font-medium'>(Choose 1 - 3  photos)</span></h3>
								</label>
								<input
									type='file'
									{...register('img', {
										required: 'Photo is Required',
									})}
									className='input input-bordered w-full max-w-xs'
									multiple
								/>
								{errors.img && (
									<p className='text-red-500'>{errors.img.message}</p>
								)}
							</div>
							<input
								className='btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white w-full mt-4'
								value='Add product'
								type='submit'
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
    );
};

export default AddProduct;



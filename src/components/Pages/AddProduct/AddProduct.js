import React from 'react';

const AddProduct = () => {
    return (
        <div className='hero min-h-screen bg-base-200'>
				<div className='hero-content grid grid-cols-1 lg:grid-cols-2-col'>
                    <div className='card grid grid-cols-1 lg:grid-cols-2-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
                    <h1 className='my-5 text-2xl'>Add a new product</h1>
						<form
							
							className='card-body'
						>
							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Product Name : </span>
								</label>
								<input
									type='text'
									
									className='input input-bordered w-full max-w-xs'
								/>
								
							</div>
							
							
							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Product Price : </span>
								</label>
								<input
									type='number'
									
									className='input input-bordered w-full max-w-xs'
								/>
								
							</div>

							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Product Category : </span>
								</label>
								<select
									
									className='select input-bordered w-full max-w-xs'
								>
									<option>a</option>
									<option>b</option>
									<option>c</option>
								</select>
								
							</div>

							<div className='form-control w-full max-w-xs'>
								<label className='label'>
									<span className='label-text'>Product Image</span>
								</label>
								<input
									type='file'
									
									className='input input-bordered w-full max-w-xs'
								/>
								
							</div>
							<input
								className='btn bg-green-500 hover:bg-green-600 border-0 text-white w-full mt-4'
								value='Add Product'
								type='submit'
							/>
						</form>
					</div>
				</div>
			</div>
    );
};

export default AddProduct;
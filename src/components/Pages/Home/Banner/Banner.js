import React from 'react';
import BannerNavBar from '../../../Shared/BannerNavBar/BannerNavBar';






const Banner = () => {
    return (
			<div>
			<div className='bgBanner min-h-[50vh]'>
					<div className='hidden md:block'>
						<BannerNavBar></BannerNavBar>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2'>
						<div className='content py-5'>
							<div className='text-white blurEffect text-start '>
								<div className='heading-content'>
									<h2 className='text-start ml-[20%] py-2 text-3xl'>
										Welcome To Our
									</h2>
									<h2 className='text-start ml-[20%] py-2 text-4xl'>
										Food Court Restaurant
									</h2>
								</div>

								<div className='text-content mt-7 pb-2'>
									<h1 className='text-start ml-[20%] flex'>
										<h3 className='text-4xl'>F</h3>
										<h2 className='mt-1'>
											<h5 className='ml-1'>
												ood is a major part of basic human needs.
											</h5>
											<h5>
												Everyone loves to eat. And there is no such thing as a
												food lover.
											</h5>
										</h2>
									</h1>
									<h1 className='text-start ml-[20%] mt-3'>
										If you are a food lover and want to eat different items,
										then Food Court is offering you both Bengali and
										international most popular food items.
									</h1>
								</div>
							</div>
						</div>
						<div className=''></div>
					</div>
				</div>
			</div>
		);
};

export default Banner;
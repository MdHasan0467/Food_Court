import React from 'react';
import BannerNavBar from '../../../Shared/BannerNavBar/BannerNavBar';
import AutoTyping, { BlinkCursor } from 'react-auto-typing'





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
									
									<AutoTyping
									  active // <boolean>
									  textRef='Food Court Restaurant' // <string>
									  writeSpeed={150} // <number>
									  deleteSpeed={150} // <number>
									  delayToWrite={1000} // <number>
									  delayToDelete={2000} // <number>
									/>
									<BlinkCursor
									  active // <boolean>
									  blinkSpeed={500} // <number>
									/>
								  
									</h2>
								</div>

							
							
							
								<div className='text-content mt-7 pb-2'>
									<h1 className='text-start ml-[20%] flex'>
										<span className='text-4xl'>F</span>
										<span className='mt-1'>
											<span className='ml-1'>
												ood is a major part of basic human needs.
											</span>
											<span>
												Everyone loves to eat. And there is no such thing as a
												food lover.
											</span>
										</span>
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
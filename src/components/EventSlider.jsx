import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import cricket from "../assets/cricket2.png";

const events = [
    {
      id: 1,
      title: 'VOLLEYBALL',
      image: cricket,
      categories: ['ENTRY FEE/ TEAM', '', 'MEN', 'WOMEN'],
      prices: ['', '₹499/-', '₹499/-'],
      bgGradient: "radial-gradient(circle at 75% 80%, rgba(255, 99, 71, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)"
    },
    {
      id: 2,
      title: 'CRICKET',
      image: cricket,
      categories: ['ENTRY FEE/ TEAM', '', 'MEN', 'WOMEN'],
      prices: ['', '', '', '', '', '', '₹499/-', '₹499/-'],
      bgGradient: "radial-gradient(circle at 75% 80%, rgba(10, 79, 80, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)"
    },
    {
      id: 3,
      title: 'FOOTBALL',
      image: cricket,
      categories: ['ENTRY FEE/ TEAM', '', 'MEN', 'WOMEN'],
      prices: ['', '₹499/-', '₹499/-'],
      bgGradient: "radial-gradient(circle at 75% 80%, rgba(0, 191, 255, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)"
    },
    {
      id: 4,
      title: 'BASKETBALL',
      image: cricket,
      categories: ['ENTRY FEE/ TEAM', '', 'MEN', 'WOMEN'],
      prices: ['', '₹499/-', '₹499/-'],
      bgGradient: "radial-gradient(circle at 75% 80%, rgba(255, 165, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)"
    },
    {
        id: 5,
        title: 'BASKETBALL',
        image: cricket,
        categories: ['ENTRY FEE/ TEAM', '', 'MEN', 'WOMEN'],
        prices: ['', '₹499/-', '₹499/-'],
        bgGradient: "radial-gradient(circle at 75% 80%, rgba(255, 165, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)"
      },{
        id: 6,
        title: 'BASKETBALL',
        image: cricket,
        categories: ['ENTRY FEE/ TEAM', '', 'MEN', 'WOMEN'],
        prices: ['', '₹499/-', '₹499/-'],
        bgGradient: "radial-gradient(circle at 75% 80%, rgba(255, 165, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)"
      },{
        id: 7,
        title: 'BASKETBALL',
        image: cricket,
        categories: ['ENTRY FEE/ TEAM', '', 'MEN', 'WOMEN'],
        prices: ['', '₹499/-', '₹499/-'],
        bgGradient: "radial-gradient(circle at 75% 80%, rgba(255, 165, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)"
      },{
        id: 8,
        title: 'BASKETBALL',
        image: cricket,
        categories: ['ENTRY FEE/ TEAM', '', 'MEN', 'WOMEN'],
        prices: ['', '₹499/-', '₹499/-'],
        bgGradient: "radial-gradient(circle at 75% 80%, rgba(255, 165, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)"
      },{
        id: 9,
        title: 'BASKETBALL',
        image: cricket,
        categories: ['ENTRY FEE/ TEAM', '', 'MEN', 'WOMEN'],
        prices: ['', '₹499/-', '₹499/-'],
        bgGradient: "radial-gradient(circle at 75% 80%, rgba(255, 165, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)"
      },
      {
        id: 10,
        title: 'BASKETBALL',
        image: cricket,
        categories: ['ENTRY FEE/ TEAM', '', 'MEN', 'WOMEN'],
        prices: ['', '₹499/-', '₹499/-'],
        bgGradient: "radial-gradient(circle at 75% 80%, rgba(255, 165, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)"
      }
  ];
  
  function EventSlider() {
    return (
      <div className="min-h-screen bg-black p-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-white mb-8">MAJOR EVENTS</h1>
  
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 3,
            slideShadows: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          className="w-full py-12"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id} className="w-[450px] h-[600px] transition-transform duration-300 scale-75 opacity-50 swiper-slide">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-lg"
                style={{
                  background: event.bgGradient,
                  borderRadius: "15px",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
                }}>
  
                <div className="relative z-10 flex flex-col items-center h-full p-8">
                  
                  {/* Event Title with dynamic color */}
                  <h2
                    className="text-4xl font-bold mb-8"
                    style={{ color: getTitleColor(event.bgGradient) }}
                  >
                    {event.title}
                  </h2>
                  
                  {/* Event Image */}
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-50 h-auto mb-12 object-contain"
                  />
  
                  {/* Event Details */}
                  <div className="w-full space-y-4 mb-auto">
                    <div className="flex justify-between items-center text-white text-xl">
                      {event.categories.map((category, index) => (
                        <span key={index}>{category}</span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-white text-xl">
                      {event.prices.map((price, index) => (
                        <span key={index}>{price}</span>
                      ))}
                    </div>
                  </div>
  
                  {/* Button with #AE5201 Background */}
                  <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                    <button className="bg-[#AE5201] hover:bg-[#924401] text-white px-8 py-3 rounded-md text-lg transition-colors">
                      Event Details →
                    </button>
                  </div>
  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  
  // Function to dynamically set the title color based on the background gradient
  function getTitleColor(gradient) {
    const colorMap = {
      "radial-gradient(circle at 75% 80%, rgba(145, 242, 166, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)": "#91F2A6", // New Gradient with #91F2A6
  "radial-gradient(circle at 75% 80%, rgba(255, 99, 71, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)": "#FF6347", // Volleyball
  "radial-gradient(circle at 75% 80%, rgba(10, 79, 80, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)": "#0A4F50", // Cricket
  "radial-gradient(circle at 75% 80%, rgba(0, 191, 255, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)": "#00BFFF", // Football
  "radial-gradient(circle at 75% 80%, rgba(255, 165, 0, 0.9) 0%, rgba(0, 0, 0, 0.85) 50%, #000000 100%)": "#FFA500"  // Basketball
    };
  
    return colorMap[gradient] || "#FFFFFF"; // Default to white if gradient doesn't match
  }
  
  export default EventSlider;
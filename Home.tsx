import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Plane, 
  Building, 
  DollarSign, 
  Star, 
  Users, 
  Calendar,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('tourism');

  // Tourism packages data
  const tourismPackages = [
    {
      id: 1,
      title: "Luxury European Tour",
      description: "14-day premium tour across major European capitals",
      price: "$4,999",
      rating: 4.9,
      image: "https://sider.ai/autoimage/luxury-travel",
      duration: "14 days",
      groupSize: "12 people"
    },
    {
      id: 2,
      title: "Tropical Paradise Getaway",
      description: "7-day relaxing vacation in the Maldives",
      price: "$2,899",
      rating: 4.8,
      image: "https://sider.ai/autoimage/tropical-paradise",
      duration: "7 days",
      groupSize: "8 people"
    },
    {
      id: 3,
      title: "Cultural Asian Experience",
      description: "10-day journey through Japan and South Korea",
      price: "$3,499",
      rating: 4.7,
      image: "https://sider.ai/autoimage/asian-culture",
      duration: "10 days",
      groupSize: "15 people"
    }
  ];

  // Investment opportunities data
  const investmentOpportunities = [
    {
      id: 1,
      title: "Luxury Resort Development",
      description: "Invest in premium resort properties in Bali",
      minInvestment: "$50,000",
      expectedReturn: "18%",
      image: "https://sider.ai/autoimage/resort-investment"
    },
    {
      id: 2,
      title: "Tourism Infrastructure Fund",
      description: "Support sustainable tourism infrastructure projects",
      minInvestment: "$25,000",
      expectedReturn: "12%",
      image: "https://sider.ai/autoimage/tourism-infrastructure"
    },
    {
      id: 3,
      title: "Hospitality Real Estate",
      description: "Own shares in premium hotel properties",
      minInvestment: "$100,000",
      expectedReturn: "22%",
      image: "https://sider.ai/autoimage/hospitality-real-estate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://sider.ai/autoimage/luxury-travel-resort" 
            alt="Luxury Travel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Emma Tourism & Investment
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            اكتشف وجهات استثنائية وفرص استثمارية ذكية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              استكشف الجولات
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              عرض الاستثمارات
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Service Tabs */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">خدماتنا</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              اختر بين تجارب السياحة الفاخرة أو فرص الاستثمار الذكية
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="tourism" className="text-lg py-3">
                <Plane className="mr-2" />
                خدمات السياحة
              </TabsTrigger>
              <TabsTrigger value="investment" className="text-lg py-3">
                <DollarSign className="mr-2" />
                فرص الاستثمار
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tourism" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tourismPackages.map((pkg) => (
                  <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={pkg.image} 
                        alt={pkg.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{pkg.title}</CardTitle>
                      <CardDescription>{pkg.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Star className="text-yellow-400 mr-1" />
                          <span className="font-semibold">{pkg.rating}</span>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {pkg.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {pkg.groupSize}
                        </div>
                      </div>
                      <Button className="w-full mt-4">
                        احجز الآن
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="investment" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {investmentOpportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={opportunity.image} 
                        alt={opportunity.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                      <CardDescription>{opportunity.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">الحد الأدنى للاستثمار:</span>
                          <span className="font-semibold">{opportunity.minInvestment}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">العائد المتوقع:</span>
                          <span className="font-semibold text-green-600">{opportunity.expectedReturn}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-4">
                        تعلم المزيد
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">لماذا تختار إيما؟</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Star className="text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">أكثر من 20 عاماً من الخبرة</h3>
                    <p className="text-gray-600">الشركة الرائدة في مجال السياحة والاستثمار موثوقة</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">وصول عالمي</h3>
                    <p className="text-gray-600">عمليات في أكثر من 50 دولة حول العالم</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">فريق متخصص</h3>
                    <p className="text-gray-600">محترفون مكرسون بالخبرة المحلية</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src="https://sider.ai/autoimage/tourism-team" 
                alt="Emma Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-600 text-white rounded-2xl p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
              <p className="text-blue-100 mb-6">
                مستعد لبدء رحلتك أو استكشاف فرص الاستثمار؟ 
                تواصل معنا اليوم للحصول على مساعدة مخصصة.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3" />
                  <span>hello@emmatravel.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-3" />
                  <span>123 شارع الأعمال، جناح 100، نيويورك 10001</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="اسمك"
                  className="w-full px-4 py-3 rounded-lg bg-blue-700 border border-blue-500 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني"
                  className="w-full px-4 py-3 rounded-lg bg-blue-700 border border-blue-500 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <textarea 
                  placeholder="رسالتك"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-blue-700 border border-blue-500 placeholder-blue-200 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-white text-blue-600 hover:bg-gray-100"
                >
                  إرسال الرسالة
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">إيما للسياحة</h3>
              <p className="text-gray-400">
                شريكك الموثوق في تجارب السفر وفرص الاستثمار.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">من نحن</a></li>
                <li><a href="#" className="hover:text-white">الخدمات</a></li>
                <li><a href="#" className="hover:text-white">الوجهات</a></li>
                <li><a href="#" className="hover:text-white">الاستثمارات</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">الدعم</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">اتصل بنا</a></li>
                <li><a href="#" className="hover:text-white">الأسئلة الشائعة</a></li>
                <li><a href="#" className="hover:text-white">الشروط والأحكام</a></li>
                <li><a href="#" className="hover:text-white">الخصوصية</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">النشرة الإخبارية</h4>
              <p className="text-gray-400 mb-4">ابقَ على اطلاع بأحدث عروضنا</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-3 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-l-none">
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 إيما للسياحة والاستثمار. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

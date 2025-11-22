import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Building2',
    title: 'Промышленное строительство',
    description: 'Строительство промышленных объектов любой сложности',
  },
  {
    icon: 'Home',
    title: 'Жилые комплексы',
    description: 'Возведение современных жилых зданий под ключ',
  },
  {
    icon: 'Wrench',
    title: 'Реконструкция',
    description: 'Модернизация и восстановление существующих объектов',
  },
  {
    icon: 'HardHat',
    title: 'Инженерные сети',
    description: 'Проектирование и монтаж всех видов коммуникаций',
  },
  {
    icon: 'Ruler',
    title: 'Проектирование',
    description: 'Полный цикл проектных работ от идеи до реализации',
  },
  {
    icon: 'FileText',
    title: 'Экспертиза',
    description: 'Технический надзор и консультационные услуги',
  },
];

const projects = [
  {
    title: 'ТЦ "Европейский"',
    category: 'Коммерческая недвижимость',
    area: '45 000 м²',
    year: '2023',
  },
  {
    title: 'ЖК "Северный"',
    category: 'Жилой комплекс',
    area: '120 000 м²',
    year: '2023',
  },
  {
    title: 'Завод "Техпром"',
    category: 'Промышленное здание',
    area: '80 000 м²',
    year: '2022',
  },
  {
    title: 'Бизнес-центр "Столица"',
    category: 'Офисное здание',
    area: '35 000 м²',
    year: '2022',
  },
];

const stats = [
  { value: '25+', label: 'Лет на рынке' },
  { value: '500+', label: 'Завершенных проектов' },
  { value: '2М+', label: 'М² построено' },
  { value: '100%', label: 'Качество работ' },
];

const reviews = [
  {
    name: 'Андрей Соколов',
    position: 'Директор ООО "СтройИнвест"',
    text: 'Профессиональная команда, качественное выполнение работ в срок. Рекомендуем!',
    rating: 5,
  },
  {
    name: 'Елена Морозова',
    position: 'Управляющая ТЦ "Европейский"',
    text: 'Отличный результат! Объект сдан точно в срок, все работы выполнены качественно.',
    rating: 5,
  },
  {
    name: 'Михаил Петров',
    position: 'Технический директор',
    text: 'Работали над сложным промышленным объектом. Все требования соблюдены.',
    rating: 5,
  },
];

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden mesh-gradient">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse-glow bg-gradient-to-br from-blue-500/15 to-cyan-500/15"></div>
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full blur-3xl animate-float bg-gradient-to-br from-green-500/10 to-emerald-600/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-rotate-slow bg-gradient-to-br from-blue-400/8 to-green-500/8"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-8 text-sm px-8 py-4 animate-scale-in glass-effect border-primary/30 shadow-xl hover:scale-105 transition-all cursor-default bg-white/80">
              <Icon name="HardHat" className="mr-2 text-primary" size={18} />
              Профессиональное строительство с 1999 года
              <Icon name="Award" className="ml-2 text-primary" size={18} />
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in text-foreground">
              Строим объекты
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-4 animate-slide-up">любой сложности</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto animate-slide-up font-medium" style={{animationDelay: '0.2s'}}>
              Полный цикл строительных работ от проектирования до сдачи объекта. 
              <span className="text-primary font-bold">25 лет опыта</span> и более <span className="text-primary font-bold">500 успешных проектов</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 hover:scale-110 transition-all shadow-2xl hover:shadow-blue-500/50 group"
                onClick={() => navigate('/contacts')}
              >
                <Icon name="Phone" className="mr-3 group-hover:rotate-12 transition-transform" size={24} />
                Обсудить проект
                <Icon name="ArrowRight" className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-7 hover:scale-110 transition-all border-2 border-primary/30 hover:bg-primary/5 group backdrop-blur-sm"
                onClick={() => navigate('/services')}
              >
                <Icon name="Briefcase" className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-bounce-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-bounce-slow" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative inline-block mb-4">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-125 transition-all duration-500">{stat.value}</div>
                  <div className="absolute inset-0 blur-xl bg-white/50 group-hover:bg-white/80 transition-all"></div>
                </div>
                <div className="text-base md:text-lg text-white/95 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 bg-white/80">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Что мы предлагаем
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные строительные решения для любых задач
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer animate-scale-in border border-border hover:border-primary/40 relative overflow-hidden bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate('/services')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Icon name={service.icon as any} size={32} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">{service.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Подробнее</span>
                    <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 bg-white/80">Портфолио</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Реализованные проекты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ за последние годы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 cursor-pointer animate-slide-up border border-border hover:border-primary/40 relative bg-white"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => navigate('/projects')}
              >
                <div className="h-64 bg-gradient-to-br from-primary to-accent relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <Icon name="Building" size={80} className="text-white/40 group-hover:scale-125 group-hover:rotate-3 transition-all duration-700 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <Badge>{project.year}</Badge>
                  </div>
                  <p className="text-muted-foreground">{project.category}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Ruler" size={16} />
                    <span>Площадь: {project.area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
              Посмотреть все проекты
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 bg-white/80">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Что говорят клиенты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мнения наших партнеров о работе с нами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-fade-in bg-white border border-border hover:border-primary/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{review.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы начать свой проект?
            </h2>
            <p className="text-xl mb-10 text-white/90">
              Свяжитесь с нами для бесплатной консультации и расчета стоимости
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Icon name="Phone" className="mr-2" size={20} />
                +7 (495) 123-45-67
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all">
                <Icon name="Mail" className="mr-2" size={20} />
                info@ntm-msk.ru
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold">НТМ</span>
                </div>
                <span className="font-bold text-lg">НТМ-Москва</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Строительная компания полного цикла
              </p>
              <div className="flex gap-3">
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                  <Icon name="Send" size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                  <Icon name="Youtube" size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all hover:scale-110">
                  <Icon name="Instagram" size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-white transition">О нас</a></li>
                <li><a href="/services" className="hover:text-white transition">Услуги</a></li>
                <li><a href="/projects" className="hover:text-white transition">Проекты</a></li>
                <li><a href="/team" className="hover:text-white transition">Персонал</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/news" className="hover:text-white transition">Новости</a></li>
                <li><a href="/career" className="hover:text-white transition">Карьера</a></li>
                <li><a href="/certificates" className="hover:text-white transition">Сертификаты</a></li>
                <li><a href="/partners" className="hover:text-white transition">Партнеры</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Строителей, 1</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@ntm-msk.ru</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 НТМ-Москва. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
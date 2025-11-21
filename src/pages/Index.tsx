import { useEffect, useState } from 'react';
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-6 text-sm px-4 py-2">Надежность • Качество • Опыт</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
              Строим будущее
              <span className="block text-primary mt-2">вместе с вами</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Полный цикл строительных работ от проектирования до сдачи объекта. 
              25 лет опыта и более 500 успешных проектов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                <Icon name="FileText" className="mr-2" size={20} />
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
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
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={service.icon as any} size={28} className="text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Портфолио</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
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
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Icon name="Building" size={80} className="text-primary/40" />
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
            <Badge variant="outline" className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
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
                className="hover:shadow-xl transition-all duration-300 animate-fade-in"
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
              <p className="text-sm text-gray-400">
                Строительная компания полного цикла
              </p>
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

import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Clients = () => {
  const clients = [
    { name: 'Газпром', logo: 'Building2', category: 'Нефть и газ' },
    { name: 'РЖД', logo: 'Train', category: 'Транспорт' },
    { name: 'Мосгортранс', logo: 'Bus', category: 'Городской транспорт' },
    { name: 'ПИК', logo: 'Home', category: 'Девелопмент' },
    { name: 'Росатом', logo: 'Atom', category: 'Энергетика' },
    { name: 'Лукойл', logo: 'Fuel', category: 'Нефть и газ' },
    { name: 'Сбербанк', logo: 'Landmark', category: 'Финансы' },
    { name: 'МТС', logo: 'Antenna', category: 'Телеком' },
    { name: 'Яндекс', logo: 'Search', category: 'IT' },
    { name: 'X5 Retail Group', logo: 'ShoppingCart', category: 'Ритейл' },
    { name: 'Аэрофлот', logo: 'Plane', category: 'Авиация' },
    { name: 'Роснефть', logo: 'Droplet', category: 'Нефть и газ' }
  ];

  const testimonials = [
    {
      name: 'Иван Петров',
      position: 'Директор по строительству, ПИК',
      text: 'НТМ-Москва выполнили строительство жилого комплекса в срок и с высоким качеством. Профессиональная команда и современный подход к работе.',
      rating: 5
    },
    {
      name: 'Мария Сидорова',
      position: 'Главный инженер, Газпром',
      text: 'Реконструкция промышленного объекта была проведена на высшем уровне. Соблюдены все стандарты безопасности и сроки.',
      rating: 5
    },
    {
      name: 'Алексей Козлов',
      position: 'Технический директор, РЖД',
      text: 'Сотрудничаем с НТМ-Москва уже 5 лет. Надежный подрядчик, всегда выполняет обязательства и идет навстречу.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Наши клиенты
          </h1>
          <p className="text-lg text-muted-foreground">
            Нам доверяют крупнейшие компании России
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Партнеры</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Icon name={client.logo as any} size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{client.name}</h3>
                  <p className="text-xs text-muted-foreground">{client.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-slide-up glass-effect border-primary/20"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

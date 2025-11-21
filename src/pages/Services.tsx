import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Building2',
    title: 'Промышленное строительство',
    description: 'Возведение производственных комплексов, складов, логистических центров',
    features: ['Проектирование', 'Строительство под ключ', 'Сдача объекта', 'Гарантийное обслуживание'],
  },
  {
    icon: 'Home',
    title: 'Жилые комплексы',
    description: 'Строительство многоквартирных домов, таунхаусов, коттеджных поселков',
    features: ['Архитектурное проектирование', 'Строительство', 'Благоустройство', 'Ввод в эксплуатацию'],
  },
  {
    icon: 'Store',
    title: 'Коммерческая недвижимость',
    description: 'Торговые центры, бизнес-центры, офисные здания',
    features: ['Концепция объекта', 'Строительство', 'Отделка', 'Инженерные системы'],
  },
  {
    icon: 'Wrench',
    title: 'Реконструкция',
    description: 'Модернизация и восстановление существующих объектов',
    features: ['Техническое обследование', 'Проект реконструкции', 'Выполнение работ', 'Усиление конструкций'],
  },
  {
    icon: 'HardHat',
    title: 'Инженерные сети',
    description: 'Проектирование и монтаж всех видов коммуникаций',
    features: ['Водоснабжение', 'Канализация', 'Электроснабжение', 'Вентиляция и кондиционирование'],
  },
  {
    icon: 'Ruler',
    title: 'Проектирование',
    description: 'Полный цикл проектных работ от концепции до рабочей документации',
    features: ['Эскизный проект', 'Рабочая документация', 'Экспертиза', 'Авторский надзор'],
  },
  {
    icon: 'FileText',
    title: 'Экспертиза',
    description: 'Технический надзор и консультационные услуги',
    features: ['Техническое обследование', 'Оценка состояния', 'Консультации', 'Заключения'],
  },
  {
    icon: 'TreeDeciduous',
    title: 'Благоустройство',
    description: 'Комплексное благоустройство прилегающей территории',
    features: ['Ландшафтный дизайн', 'Озеленение', 'Дорожки и площадки', 'Малые архитектурные формы'],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6">Наши услуги</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Комплексные решения для строительства
            </h1>
            <p className="text-xl text-muted-foreground">
              От проектирования до сдачи объекта под ключ
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all shrink-0">
                      <Icon name={service.icon as any} size={32} className="text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" size={16} className="text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 group-hover:bg-primary group-hover:scale-105 transition-all">
                    Узнать подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Нужна консультация?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Свяжитесь с нами, и наши специалисты подберут оптимальное решение для вашего проекта
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
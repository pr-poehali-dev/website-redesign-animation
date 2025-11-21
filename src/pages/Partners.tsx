import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const partners = [
  {
    name: 'СтройМатериалы Про',
    category: 'Поставщики материалов',
    description: 'Крупнейший поставщик строительных материалов',
    years: '15 лет',
  },
  {
    name: 'ТехПром Инжиниринг',
    category: 'Инженерные системы',
    description: 'Проектирование и монтаж инженерных коммуникаций',
    years: '10 лет',
  },
  {
    name: 'ГлавПроект',
    category: 'Проектирование',
    description: 'Архитектурно-проектное бюро',
    years: '12 лет',
  },
  {
    name: 'МеталлКонструкция',
    category: 'Металлоконструкции',
    description: 'Производство и монтаж металлоконструкций',
    years: '8 лет',
  },
  {
    name: 'ЭкоСтрой',
    category: 'Экологические технологии',
    description: 'Экологичные решения для строительства',
    years: '6 лет',
  },
  {
    name: 'ТехСервис 24',
    category: 'Обслуживание техники',
    description: 'Аренда и обслуживание строительной техники',
    years: '9 лет',
  },
  {
    name: 'Безопасность Плюс',
    category: 'Охрана объектов',
    description: 'Системы безопасности для строительных объектов',
    years: '7 лет',
  },
  {
    name: 'КачествоКонтроль',
    category: 'Экспертиза',
    description: 'Независимая экспертиза и контроль качества',
    years: '11 лет',
  },
];

const clients = [
  {
    name: 'ГК "Девелопмент"',
    projects: '45',
    description: 'Девелоперская компания',
  },
  {
    name: 'Торговая сеть "Мега"',
    projects: '12',
    description: 'Розничная торговля',
  },
  {
    name: 'Промышленная группа "Альфа"',
    projects: '28',
    description: 'Промышленное производство',
  },
  {
    name: 'Администрация г. Москвы',
    projects: '18',
    description: 'Государственный сектор',
  },
  {
    name: 'Банк "Столица"',
    projects: '8',
    description: 'Финансовая организация',
  },
  {
    name: 'ЖК "Комфорт"',
    projects: '22',
    description: 'Жилая недвижимость',
  },
];

const stats = [
  { value: '150+', label: 'Партнеров' },
  { value: '200+', label: 'Клиентов' },
  { value: '500+', label: 'Совместных проектов' },
  { value: '25', label: 'Лет сотрудничества' },
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6">Партнеры</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Наши партнеры и клиенты
            </h1>
            <p className="text-xl text-muted-foreground">
              Сотрудничаем с лучшими компаниями отрасли
            </p>
          </div>
        </div>
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
            <Badge variant="outline" className="mb-4">Партнеры</Badge>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Наши поставщики и подрядчики
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Надежные партнеры, с которыми мы реализуем проекты любой сложности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Handshake" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary text-center mb-2">
                    {partner.name}
                  </h3>
                  <Badge variant="outline" className="mx-auto block w-fit mb-3">
                    {partner.category}
                  </Badge>
                  <p className="text-sm text-muted-foreground text-center mb-3">
                    {partner.description}
                  </p>
                  <div className="text-center text-xs text-primary font-medium">
                    Сотрудничество: {partner.years}
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
            <Badge variant="outline" className="mb-4">Клиенты</Badge>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Кто нам доверяет
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Крупнейшие компании и организации выбирают НТМ-Москва
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon name="Building2" size={28} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary mb-1">
                        {client.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {client.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                        <span className="text-sm font-medium">
                          {client.projects} совместных проектов
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 animate-fade-in">
              <CardContent className="p-12 text-center">
                <Icon name="Users" size={64} className="text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-secondary mb-4">
                  Станьте нашим партнером
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Мы открыты к новым партнерским отношениям и готовы обсудить 
                  взаимовыгодное сотрудничество
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contacts">
                    <Badge className="text-base px-6 py-3 cursor-pointer hover:scale-105 transition-transform">
                      <Icon name="Mail" className="mr-2" size={18} />
                      Написать нам
                    </Badge>
                  </a>
                  <a href="tel:+74951234567">
                    <Badge variant="outline" className="text-base px-6 py-3 cursor-pointer hover:scale-105 transition-transform">
                      <Icon name="Phone" className="mr-2" size={18} />
                      +7 (495) 123-45-67
                    </Badge>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
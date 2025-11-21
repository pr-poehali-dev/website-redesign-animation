import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const news = [
  {
    date: '15 ноября 2024',
    title: 'Завершено строительство ЖК "Северный"',
    category: 'Новости компании',
    preview: 'Сдан в эксплуатацию жилой комплекс на 1200 квартир. Все объекты соответствуют современным стандартам качества и энергоэффективности.',
    readTime: '3 мин',
  },
  {
    date: '5 ноября 2024',
    title: 'НТМ-Москва получила награду "Строитель года 2024"',
    category: 'Награды',
    preview: 'Компания признана лучшей строительной организацией Москвы по итогам 2024 года. Награда получена за высокое качество выполненных работ.',
    readTime: '2 мин',
  },
  {
    date: '28 октября 2024',
    title: 'Начало строительства бизнес-центра "Гранд"',
    category: 'Проекты',
    preview: 'Стартовали работы по возведению нового офисного комплекса класса А в центре Москвы. Срок реализации проекта - 24 месяца.',
    readTime: '4 мин',
  },
  {
    date: '20 октября 2024',
    title: 'Внедрение BIM-технологий в проектирование',
    category: 'Технологии',
    preview: 'Компания переходит на использование BIM-моделирования для всех новых проектов. Это позволит повысить точность и сократить сроки строительства.',
    readTime: '5 мин',
  },
  {
    date: '10 октября 2024',
    title: 'Открыт набор на курсы повышения квалификации',
    category: 'Обучение',
    preview: 'Стартует программа обучения для строительных специалистов. Курсы включают современные технологии и стандарты безопасности.',
    readTime: '3 мин',
  },
  {
    date: '1 октября 2024',
    title: 'Партнерство с ведущим производителем стройматериалов',
    category: 'Партнерство',
    preview: 'Подписан договор о долгосрочном сотрудничестве с крупнейшим поставщиком строительных материалов. Это позволит оптимизировать закупки.',
    readTime: '2 мин',
  },
  {
    date: '25 сентября 2024',
    title: 'Реализован проект "Умный дом" в ЖК "Парковый"',
    category: 'Технологии',
    preview: 'Внедрена система умного управления инженерными сетями в новом жилом комплексе. Жители могут контролировать все системы через мобильное приложение.',
    readTime: '4 мин',
  },
  {
    date: '15 сентября 2024',
    title: 'Экологический сертификат LEED для нового проекта',
    category: 'Экология',
    preview: 'Бизнес-центр "Столица" получил международный сертификат LEED за применение экологичных технологий и материалов в строительстве.',
    readTime: '3 мин',
  },
];

const categories = ['Все новости', 'Новости компании', 'Проекты', 'Технологии', 'Награды'];

export default function News() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6">Новости</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Последние события
            </h1>
            <p className="text-xl text-muted-foreground">
              Узнайте о наших проектах, достижениях и планах развития
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {news.map((item, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 cursor-pointer group animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline">{item.category}</Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {item.readTime}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{item.preview}</p>
                    <span className="text-primary font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Читать далее
                      <Icon name="ArrowRight" size={16} />
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Категории</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle>Подписка на новости</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Получайте последние новости компании на email
                  </p>
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all">
                    Подписаться
                  </button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary to-secondary text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6">
                  <Icon name="Newspaper" size={48} className="mb-4" />
                  <h3 className="text-xl font-bold mb-2">Журнал НТМ</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Скачайте наш корпоративный журнал с подробными статьями о проектах
                  </p>
                  <button className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-white/90 transition-all text-sm font-medium">
                    Скачать PDF
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
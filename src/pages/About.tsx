import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const values = [
  {
    icon: 'Shield',
    title: 'Надежность',
    description: 'Гарантируем качество и соблюдение всех обязательств',
  },
  {
    icon: 'Award',
    title: 'Профессионализм',
    description: 'Команда опытных специалистов с многолетним стажем',
  },
  {
    icon: 'Users',
    title: 'Клиентоориентированность',
    description: 'Индивидуальный подход к каждому проекту',
  },
  {
    icon: 'TrendingUp',
    title: 'Инновации',
    description: 'Современные технологии и материалы',
  },
];

const history = [
  { year: '1999', event: 'Основание компании НТМ-Москва' },
  { year: '2005', event: 'Расширение штата до 200 специалистов' },
  { year: '2010', event: 'Реализация крупнейшего проекта - ТЦ "Европейский"' },
  { year: '2015', event: 'Получение международных сертификатов ISO' },
  { year: '2020', event: 'Открытие собственного проектного бюро' },
  { year: '2024', event: 'Более 500 успешно завершенных проектов' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6">О компании</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              НТМ-Москва
            </h1>
            <p className="text-xl text-muted-foreground">
              Строительная компания с 25-летним опытом работы на российском рынке
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Наша миссия
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы создаем качественные и надежные строительные объекты, которые служат людям десятилетиями. 
                Наша цель - превосходить ожидания клиентов и устанавливать новые стандарты в строительной индустрии.
              </p>
              <p className="text-lg text-muted-foreground">
                За 25 лет работы мы реализовали более 500 проектов различной сложности: 
                от жилых комплексов до крупных промышленных объектов. Каждый проект - это результат 
                профессионализма нашей команды и доверия наших клиентов.
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center animate-scale-in">
              <Icon name="Building2" size={120} className="text-primary/40" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Наши ценности</Badge>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              На чем мы строим бизнес
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">История</Badge>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Путь к успеху
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              {history.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-20 pb-12 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute left-5 top-0 w-7 h-7 bg-primary rounded-full border-4 border-background"></div>
                  <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                    <p className="text-lg text-secondary">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Станьте частью нашей истории успеха
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Доверьте нам ваш проект, и мы воплотим его в жизнь
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

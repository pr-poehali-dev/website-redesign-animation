import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const vacancies = [
  {
    title: 'Главный инженер проекта',
    department: 'Инженерный отдел',
    type: 'Полная занятость',
    experience: 'От 5 лет',
    salary: 'от 150 000 ₽',
    responsibilities: [
      'Руководство инженерными работами на объектах',
      'Контроль качества выполнения работ',
      'Взаимодействие с подрядчиками',
      'Разработка технических решений',
    ],
    requirements: [
      'Высшее техническое образование',
      'Опыт работы от 5 лет',
      'Знание СНиП и ГОСТ',
      'Навыки работы в AutoCAD',
    ],
  },
  {
    title: 'Архитектор',
    department: 'Проектный отдел',
    type: 'Полная занятость',
    experience: 'От 3 лет',
    salary: 'от 120 000 ₽',
    responsibilities: [
      'Разработка архитектурных решений',
      'Создание рабочей документации',
      'Работа с BIM-моделями',
      'Авторский надзор за строительством',
    ],
    requirements: [
      'Профильное образование',
      'Опыт работы от 3 лет',
      'Владение Revit, ArchiCAD',
      'Портфолио реализованных проектов',
    ],
  },
  {
    title: 'Прораб',
    department: 'Строительное управление',
    type: 'Полная занятость',
    experience: 'От 5 лет',
    salary: 'от 100 000 ₽',
    responsibilities: [
      'Организация строительных работ',
      'Контроль соблюдения технологий',
      'Управление строительными бригадами',
      'Ведение исполнительной документации',
    ],
    requirements: [
      'Строительное образование',
      'Опыт работы прорабом от 5 лет',
      'Знание технологий строительства',
      'Организаторские способности',
    ],
  },
  {
    title: 'Инженер ПТО',
    department: 'Производственно-технический отдел',
    type: 'Полная занятость',
    experience: 'От 2 лет',
    salary: 'от 80 000 ₽',
    responsibilities: [
      'Ведение исполнительной документации',
      'Оформление актов скрытых работ',
      'Взаимодействие с надзорными органами',
      'Подготовка проектно-сметной документации',
    ],
    requirements: [
      'Строительное образование',
      'Опыт работы от 2 лет',
      'Знание нормативной документации',
      'Внимательность к деталям',
    ],
  },
  {
    title: 'Сметчик',
    department: 'Планово-экономический отдел',
    type: 'Полная занятость',
    experience: 'От 3 лет',
    salary: 'от 90 000 ₽',
    responsibilities: [
      'Составление смет на строительство',
      'Расчет стоимости работ и материалов',
      'Проверка актов выполненных работ',
      'Работа с базами ФЕР, ТЕР',
    ],
    requirements: [
      'Техническое образование',
      'Опыт работы от 3 лет',
      'Владение сметными программами',
      'Знание ценообразования в строительстве',
    ],
  },
];

const benefits = [
  { icon: 'Wallet', title: 'Конкурентная зарплата', description: 'Достойный уровень оплаты труда' },
  { icon: 'TrendingUp', title: 'Карьерный рост', description: 'Возможности развития и обучения' },
  { icon: 'Heart', title: 'ДМС', description: 'Медицинское страхование для сотрудников' },
  { icon: 'Calendar', title: 'Отпуск', description: 'Оплачиваемый отпуск от 28 дней' },
  { icon: 'Users', title: 'Команда', description: 'Дружный коллектив профессионалов' },
  { icon: 'Award', title: 'Премии', description: 'Система бонусов и поощрений' },
];

export default function Career() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6">Карьера</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Работа в НТМ-Москва
            </h1>
            <p className="text-xl text-muted-foreground">
              Присоединяйтесь к команде профессионалов и работайте над крупнейшими проектами
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Почему стоит работать у нас
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Вакансии</Badge>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Открытые позиции
            </h2>
            <p className="text-lg text-muted-foreground">
              {vacancies.length} актуальных вакансий
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {vacancies.map((vacancy, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{vacancy.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{vacancy.department}</Badge>
                        <Badge variant="outline">{vacancy.type}</Badge>
                        <Badge variant="outline">{vacancy.experience}</Badge>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-2xl font-bold text-primary">{vacancy.salary}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary" />
                        Обязанности:
                      </h4>
                      <ul className="space-y-2">
                        {vacancy.responsibilities.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Icon name="Circle" size={6} className="mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Icon name="FileText" size={18} className="text-primary" />
                        Требования:
                      </h4>
                      <ul className="space-y-2">
                        {vacancy.requirements.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Icon name="Circle" size={6} className="mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="hover:scale-105 transition-transform">
                    <Icon name="Send" className="mr-2" size={18} />
                    Откликнуться на вакансию
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
              Не нашли подходящую вакансию?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Отправьте нам свое резюме, и мы рассмотрим вашу кандидатуру
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              <Icon name="Mail" className="mr-2" size={20} />
              Отправить резюме
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
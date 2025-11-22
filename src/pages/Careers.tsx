import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const vacancies = [
    {
      title: 'Инженер-строитель',
      icon: 'HardHat',
      salary: 'от 120 000 ₽',
      type: 'Полная занятость',
      location: 'Москва',
      requirements: ['Высшее строительное образование', 'Опыт от 3 лет', 'Знание AutoCAD', 'Умение читать чертежи']
    },
    {
      title: 'Прораб',
      icon: 'UserCog',
      salary: 'от 150 000 ₽',
      type: 'Полная занятость',
      location: 'Москва',
      requirements: ['Опыт работы от 5 лет', 'Навыки управления командой', 'Знание технологий строительства', 'Ответственность']
    },
    {
      title: 'Архитектор',
      icon: 'Ruler',
      salary: 'от 100 000 ₽',
      type: 'Полная занятость',
      location: 'Москва',
      requirements: ['Высшее архитектурное образование', 'Опыт от 2 лет', 'Владение ArchiCAD, Revit', 'Портфолио проектов']
    },
    {
      title: 'Менеджер проектов',
      icon: 'Briefcase',
      salary: 'от 130 000 ₽',
      type: 'Полная занятость',
      location: 'Москва',
      requirements: ['Опыт в строительстве от 4 лет', 'Навыки планирования', 'Знание MS Project', 'Организаторские способности']
    },
    {
      title: 'Сметчик',
      icon: 'Calculator',
      salary: 'от 90 000 ₽',
      type: 'Полная занятость',
      location: 'Москва',
      requirements: ['Опыт сметных расчетов', 'Знание Гранд-Смета', 'Внимательность', 'Аналитические способности']
    },
    {
      title: 'Бригадир',
      icon: 'Users',
      salary: 'от 110 000 ₽',
      type: 'Полная занятость',
      location: 'Москва',
      requirements: ['Опыт строительных работ от 5 лет', 'Навыки руководства бригадой', 'Ответственность', 'Коммуникабельность']
    }
  ];

  const benefits = [
    {
      icon: 'Wallet',
      title: 'Конкурентная зарплата',
      description: 'Достойная оплата труда и своевременные выплаты'
    },
    {
      icon: 'TrendingUp',
      title: 'Карьерный рост',
      description: 'Возможности профессионального развития'
    },
    {
      icon: 'Heart',
      title: 'Соцпакет',
      description: 'ДМС, оплачиваемый отпуск и больничные'
    },
    {
      icon: 'GraduationCap',
      title: 'Обучение',
      description: 'Курсы повышения квалификации за счет компании'
    },
    {
      icon: 'Coffee',
      title: 'Комфортные условия',
      description: 'Современное оборудование и офис в центре'
    },
    {
      icon: 'Gift',
      title: 'Бонусы',
      description: 'Премии по результатам проектов'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Карьера в НТМ-Москва
          </h1>
          <p className="text-lg text-muted-foreground">
            Присоединяйтесь к команде профессионалов строительной отрасли
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества работы у нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in border-2 border-transparent hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Icon name={benefit.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Открытые вакансии</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {vacancies.map((vacancy, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 animate-slide-up glass-effect border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <Icon name={vacancy.icon as any} size={28} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{vacancy.salary}</div>
                      <div className="text-xs text-muted-foreground">{vacancy.type}</div>
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{vacancy.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={14} />
                    {vacancy.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2 text-sm">Требования:</h4>
                  <ul className="space-y-1 mb-6">
                    {vacancy.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full gradient-primary hover:scale-105 transition-all shadow-lg group">
                    <Icon name="Send" size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    Откликнуться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

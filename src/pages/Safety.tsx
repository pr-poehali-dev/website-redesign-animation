import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Safety = () => {
  const safetyMeasures = [
    {
      title: 'Инструктаж персонала',
      icon: 'Users',
      description: 'Обязательный инструктаж по технике безопасности для всех работников перед началом работ',
      points: ['Вводный инструктаж', 'Первичный на рабочем месте', 'Повторный каждые 6 месяцев', 'Внеплановый при изменениях']
    },
    {
      title: 'Средства защиты',
      icon: 'Shield',
      description: 'Обеспечение всех работников сертифицированными средствами индивидуальной защиты',
      points: ['Защитные каски', 'Спецодежда и обувь', 'Страховочные системы', 'Защита зрения и слуха']
    },
    {
      title: 'Контроль качества',
      icon: 'ClipboardCheck',
      description: 'Регулярные проверки соблюдения норм безопасности на всех этапах строительства',
      points: ['Ежедневные осмотры', 'Проверка оборудования', 'Контроль документации', 'Аудит безопасности']
    },
    {
      title: 'Ограждение территории',
      icon: 'Ban',
      description: 'Обязательное ограждение строительных площадок и опасных зон',
      points: ['Сплошные заборы', 'Предупреждающие знаки', 'Контроль доступа', 'Освещение территории']
    },
    {
      title: 'Пожарная безопасность',
      icon: 'Flame',
      description: 'Комплекс мер по предотвращению и тушению возможных пожаров',
      points: ['Огнетушители на объекте', 'Пожарные щиты', 'План эвакуации', 'Обучение персонала']
    },
    {
      title: 'Медицинская помощь',
      icon: 'Heart',
      description: 'Готовность к оказанию первой помощи при несчастных случаях',
      points: ['Аптечки на объектах', 'Обученные специалисты', 'Связь со скорой', 'Медосмотры работников']
    }
  ];

  const statistics = [
    { value: '0', label: 'Серьезных травм за год', icon: 'TrendingDown' },
    { value: '100%', label: 'Персонала прошли обучение', icon: 'GraduationCap' },
    { value: '24/7', label: 'Контроль безопасности', icon: 'Eye' },
    { value: 'ISO 45001', label: 'Сертификация', icon: 'Award' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Техника безопасности
          </h1>
          <p className="text-lg text-muted-foreground">
            Безопасность превыше всего — наш главный приоритет на каждом объекте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <Card
              key={index}
              className="text-center animate-scale-in glass-effect border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <Icon name={stat.icon as any} size={40} className="text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyMeasures.map((measure, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-slide-up border-2 border-transparent hover:border-primary/30 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Icon name={measure.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {measure.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground mb-4">{measure.description}</p>
                <ul className="space-y-2">
                  {measure.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Safety;

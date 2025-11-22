import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Sustainability = () => {
  const initiatives = [
    {
      title: 'Энергоэффективность',
      icon: 'Zap',
      description: 'Внедряем технологии для снижения энергопотребления зданий',
      achievements: [
        'Снижение энергопотребления на 40%',
        'Солнечные панели на 15 объектах',
        'Системы рекуперации тепла',
        'LED-освещение во всех проектах'
      ]
    },
    {
      title: 'Вторичная переработка',
      icon: 'Recycle',
      description: 'Минимизация отходов и повторное использование материалов',
      achievements: [
        'Переработка 70% строительных отходов',
        'Использование вторичного бетона',
        'Сортировка мусора на объектах',
        'Программа утилизации материалов'
      ]
    },
    {
      title: 'Экологичные материалы',
      icon: 'Leaf',
      description: 'Использование безопасных и природных материалов',
      achievements: [
        'Сертифицированная древесина FSC',
        'Низкоэмиссионные краски',
        'Натуральные утеплители',
        'Безопасные отделочные материалы'
      ]
    },
    {
      title: 'Водосбережение',
      icon: 'Droplet',
      description: 'Эффективное использование водных ресурсов',
      achievements: [
        'Системы сбора дождевой воды',
        'Экономичная сантехника',
        'Капельный полив территории',
        'Очистка и повторное использование'
      ]
    },
    {
      title: 'Зеленые территории',
      icon: 'Trees',
      description: 'Озеленение и сохранение природных ландшафтов',
      achievements: [
        'Озеленение 100% территорий',
        'Сохранение существующих деревьев',
        'Высадка 5000+ новых растений',
        'Создание экопарков'
      ]
    },
    {
      title: 'Снижение выбросов',
      icon: 'Wind',
      description: 'Уменьшение углеродного следа строительства',
      achievements: [
        'Электротранспорт на объектах',
        'Локальные материалы (-60% доставки)',
        'Оптимизация логистики',
        'Компенсация CO₂ выбросов'
      ]
    }
  ];

  const certifications = [
    { name: 'ISO 14001', description: 'Экологический менеджмент', icon: 'Award' },
    { name: 'LEED', description: 'Зеленое строительство', icon: 'Medal' },
    { name: 'BREEAM', description: 'Устойчивое развитие', icon: 'Trophy' },
    { name: 'GREEN ZOOM', description: 'Российский стандарт', icon: 'Star' }
  ];

  const stats = [
    { value: '-40%', label: 'Энергопотребление', icon: 'TrendingDown' },
    { value: '70%', label: 'Переработка отходов', icon: 'Recycle' },
    { value: '5000+', label: 'Высажено деревьев', icon: 'Trees' },
    { value: '100%', label: 'Зеленые территории', icon: 'Leaf' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Экологичное строительство
          </h1>
          <p className="text-lg text-muted-foreground">
            Мы строим будущее с заботой об окружающей среде и следующих поколениях
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-slide-up border-2 border-transparent hover:border-primary/30 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Icon name={initiative.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {initiative.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground mb-4">{initiative.description}</p>
                <ul className="space-y-2">
                  {initiative.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Сертификации и стандарты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Icon name={cert.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;

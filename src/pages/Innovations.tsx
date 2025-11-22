import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Innovations = () => {
  const innovations = [
    {
      title: '3D-печать бетоном',
      icon: 'Box',
      status: 'В разработке',
      description: 'Технология послойного нанесения бетона для создания конструкций',
      benefits: ['Скорость строительства +300%', 'Снижение затрат на 40%', 'Сложные формы без опалубки', 'Минимум отходов']
    },
    {
      title: 'Дроны для инспекции',
      icon: 'Drone',
      status: 'Внедрено',
      description: 'Беспилотники для мониторинга строительных площадок',
      benefits: ['Контроль качества 24/7', 'Аэрофотосъемка объектов', 'Проверка труднодоступных мест', 'Безопасность персонала']
    },
    {
      title: 'Умные материалы',
      icon: 'Sparkles',
      status: 'Тестирование',
      description: 'Самовосстанавливающиеся бетоны и адаптивные покрытия',
      benefits: ['Срок службы +50 лет', 'Самозалечивание трещин', 'Адаптация к температуре', 'Экологичность']
    },
    {
      title: 'Роботизированная сварка',
      icon: 'Bot',
      status: 'Внедрено',
      description: 'Автоматизация сварочных работ для металлоконструкций',
      benefits: ['Точность до 0.1 мм', 'Производительность +200%', 'Стабильное качество', 'Работа без перерывов']
    },
    {
      title: 'Цифровой двойник',
      icon: 'Copy',
      status: 'Внедрено',
      description: 'Виртуальная копия объекта для управления и прогнозирования',
      benefits: ['Предсказание дефектов', 'Оптимизация эксплуатации', 'Экономия на ремонте 30%', 'Управление в реальном времени']
    },
    {
      title: 'Модульное строительство',
      icon: 'Blocks',
      status: 'Внедрено',
      description: 'Заводское производство модулей для быстрой сборки на объекте',
      benefits: ['Сроки строительства -60%', 'Заводское качество', 'Всесезонное производство', 'Гибкая планировка']
    }
  ];

  const labs = [
    {
      name: 'R&D лаборатория',
      icon: 'FlaskConical',
      description: 'Исследование новых материалов и технологий',
      projects: 12
    },
    {
      name: 'Центр инноваций',
      icon: 'Lightbulb',
      description: 'Внедрение передовых решений в строительство',
      projects: 8
    },
    {
      name: 'Испытательный полигон',
      icon: 'TestTube',
      description: 'Тестирование материалов в реальных условиях',
      projects: 15
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Инновации и R&D
          </h1>
          <p className="text-lg text-muted-foreground">
            Исследуем и внедряем передовые технологии для строительства будущего
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-slide-up border-2 border-transparent hover:border-primary/30 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Icon name={innovation.icon as any} size={32} className="text-white" />
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    innovation.status === 'Внедрено' 
                      ? 'bg-green-100 text-green-700' 
                      : innovation.status === 'Тестирование'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {innovation.status}
                  </span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {innovation.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground mb-4">{innovation.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">Преимущества:</p>
                  <ul className="space-y-1">
                    {innovation.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Icon name="Zap" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Исследовательские центры</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {labs.map((lab, index) => (
              <Card
                key={index}
                className="text-center animate-scale-in glass-effect border-primary/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon name={lab.icon as any} size={40} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{lab.name}</h3>
                  <p className="text-muted-foreground mb-4">{lab.description}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                    <Icon name="FolderOpen" size={16} className="text-primary" />
                    <span className="text-sm font-semibold text-primary">{lab.projects} проектов</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="glass-effect border-primary/20">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Icon name="Rocket" size={64} className="text-primary mb-6" />
                <h3 className="text-3xl font-bold mb-4">Инвестиции в будущее</h3>
                <p className="text-muted-foreground mb-4">
                  Ежегодно мы инвестируем 15% прибыли в исследования и разработку новых технологий. 
                  Это позволяет нам оставаться лидерами индустрии и предлагать клиентам самые современные решения.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Патентов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">35</div>
                    <div className="text-sm text-muted-foreground">Активных проектов R&D</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Исследования материалов', value: 85 },
                  { label: 'Автоматизация процессов', value: 70 },
                  { label: 'Цифровизация', value: 95 },
                  { label: 'Экологичные технологии', value: 80 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="text-sm text-primary font-bold">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full gradient-primary transition-all duration-1000"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Innovations;

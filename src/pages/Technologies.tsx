import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Technologies = () => {
  const technologies = [
    {
      title: 'Монолитное строительство',
      icon: 'Building2',
      description: 'Современная технология возведения зданий с использованием бетона и арматуры',
      benefits: ['Высокая прочность', 'Сейсмостойкость', 'Свободная планировка', 'Долговечность 100+ лет']
    },
    {
      title: 'Каркасное строительство',
      icon: 'Warehouse',
      description: 'Быстровозводимые конструкции из металлического или деревянного каркаса',
      benefits: ['Скорость монтажа', 'Экономичность', 'Легкий фундамент', 'Круглогодичное строительство']
    },
    {
      title: 'BIM-моделирование',
      icon: 'Layers',
      description: 'Информационное моделирование зданий для точного планирования',
      benefits: ['3D-визуализация', 'Контроль бюджета', 'Минимум ошибок', 'Оптимизация процессов']
    },
    {
      title: 'Энергоэффективность',
      icon: 'Leaf',
      description: 'Технологии для снижения энергопотребления зданий',
      benefits: ['Утепление фасадов', 'Энергосберегающие окна', 'Солнечные панели', 'Умный дом']
    },
    {
      title: 'Сборные конструкции',
      icon: 'Package',
      description: 'Заводское изготовление элементов с последующей сборкой на объекте',
      benefits: ['Заводское качество', 'Быстрый монтаж', 'Снижение затрат', 'Минимум отходов']
    },
    {
      title: 'Умное управление',
      icon: 'Cpu',
      description: 'Цифровые системы контроля и управления строительством',
      benefits: ['Онлайн-мониторинг', 'Контроль качества', 'Автоматизация', 'Прозрачность процесса']
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Современные технологии
          </h1>
          <p className="text-lg text-muted-foreground">
            Используем передовые методы и инновационные решения в строительстве
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-scale-in border-2 border-transparent hover:border-primary/30 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <CardHeader className="relative">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Icon name={tech.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {tech.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground mb-4">{tech.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">Преимущества:</p>
                  <ul className="space-y-1">
                    {tech.benefits.map((benefit, i) => (
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
      </div>
    </div>
  );
};

export default Technologies;

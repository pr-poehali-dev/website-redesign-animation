import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Materials = () => {
  const materials = [
    {
      category: 'Бетон и растворы',
      icon: 'Box',
      items: ['Бетон М200-М500', 'Цементный раствор', 'Пескобетон', 'Керамзитобетон'],
      description: 'Высококачественные бетонные смеси для любых типов строительства'
    },
    {
      category: 'Кирпич и блоки',
      icon: 'Grid3x3',
      items: ['Керамический кирпич', 'Газобетонные блоки', 'Пеноблоки', 'Силикатный кирпич'],
      description: 'Широкий ассортимент стеновых материалов'
    },
    {
      category: 'Металлоконструкции',
      icon: 'Warehouse',
      items: ['Арматура', 'Балки', 'Швеллеры', 'Уголки'],
      description: 'Металлопрокат для каркасных конструкций'
    },
    {
      category: 'Кровельные материалы',
      icon: 'Home',
      items: ['Металлочерепица', 'Профнастил', 'Мягкая кровля', 'Водосточные системы'],
      description: 'Надежная защита вашей крыши'
    },
    {
      category: 'Изоляционные материалы',
      icon: 'Shield',
      items: ['Минеральная вата', 'Пенополистирол', 'Гидроизоляция', 'Пароизоляция'],
      description: 'Современные решения для тепло- и гидроизоляции'
    },
    {
      category: 'Отделочные материалы',
      icon: 'Paintbrush',
      items: ['Штукатурки', 'Шпатлевки', 'Грунтовки', 'Краски'],
      description: 'Материалы для финишной отделки'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Строительные материалы
          </h1>
          <p className="text-lg text-muted-foreground">
            Работаем только с проверенными поставщиками и гарантируем качество всех материалов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {materials.map((material, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 cursor-pointer animate-slide-up border-2 border-transparent hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Icon name={material.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {material.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{material.description}</p>
                <ul className="space-y-2">
                  {material.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Icon name="CheckCircle" size={16} className="text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-effect border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Нужна консультация по материалам?</h3>
            <p className="text-muted-foreground mb-6">
              Наши специалисты помогут подобрать оптимальные материалы для вашего проекта
            </p>
            <Button className="gradient-primary hover:scale-105 transition-all shadow-lg">
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Получить консультацию
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Materials;

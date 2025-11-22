import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Equipment = () => {
  const equipment = [
    {
      category: 'Подъемная техника',
      icon: 'Crane',
      items: [
        { name: 'Башенные краны', specs: 'Грузоподъемность до 32 тонн' },
        { name: 'Автокраны', specs: 'Стрела до 70 метров' },
        { name: 'Манипуляторы', specs: 'До 15 тонн' },
        { name: 'Погрузчики', specs: 'Фронтальные и вилочные' }
      ]
    },
    {
      category: 'Земляная техника',
      icon: 'Bulldozer',
      items: [
        { name: 'Экскаваторы', specs: 'От 1.5 до 50 тонн' },
        { name: 'Бульдозеры', specs: 'Мощность до 450 л.с.' },
        { name: 'Грейдеры', specs: 'Планировка участков' },
        { name: 'Самосвалы', specs: 'Грузоподъемность до 40 тонн' }
      ]
    },
    {
      category: 'Бетонное оборудование',
      icon: 'Factory',
      items: [
        { name: 'Бетононасосы', specs: 'Подача до 60 м³/ч' },
        { name: 'Бетоносмесители', specs: 'Объем до 12 м³' },
        { name: 'Виброплиты', specs: 'Уплотнение бетона' },
        { name: 'Затирочные машины', specs: 'Финишная обработка' }
      ]
    },
    {
      category: 'Строительные леса',
      icon: 'Layers',
      items: [
        { name: 'Рамные леса', specs: 'До 100 метров' },
        { name: 'Клиновые леса', specs: 'Повышенная прочность' },
        { name: 'Вышки-туры', specs: 'Мобильные конструкции' },
        { name: 'Подмости', specs: 'Для внутренних работ' }
      ]
    },
    {
      category: 'Электроинструмент',
      icon: 'Wrench',
      items: [
        { name: 'Перфораторы', specs: 'Профессиональные' },
        { name: 'Болгарки', specs: 'До 230 мм' },
        { name: 'Сварочные аппараты', specs: 'Инверторные' },
        { name: 'Генераторы', specs: 'До 100 кВт' }
      ]
    },
    {
      category: 'Спецтехника',
      icon: 'Truck',
      items: [
        { name: 'Автовышки', specs: 'Высота до 40 метров' },
        { name: 'Компрессоры', specs: 'Производительность до 30 м³/мин' },
        { name: 'Виброкатки', specs: 'Для уплотнения грунта' },
        { name: 'Мини-погрузчики', specs: 'Bobcat и аналоги' }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Техника и оборудование
          </h1>
          <p className="text-lg text-muted-foreground">
            Собственный парк современной техники для выполнения работ любой сложности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {equipment.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 animate-slide-up border-2 border-transparent hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <Icon name={category.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((item, i) => (
                    <div key={i} className="border-l-2 border-primary/30 pl-3 hover:border-primary transition-colors">
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.specs}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-effect border-primary/20">
            <CardContent className="p-8">
              <Icon name="Shield" size={48} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Собственный парк техники</h3>
              <p className="text-muted-foreground mb-4">
                Вся техника находится в собственности компании, проходит регулярное техническое обслуживание и соответствует стандартам безопасности
              </p>
              <Button variant="outline" className="group">
                Подробнее
                <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          <Card className="glass-effect border-primary/20">
            <CardContent className="p-8">
              <Icon name="Clock" size={48} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Аренда техники</h3>
              <p className="text-muted-foreground mb-4">
                Предоставляем технику в аренду с квалифицированными операторами. Гибкие условия, конкурентные цены, круглосуточная поддержка
              </p>
              <Button className="gradient-primary hover:scale-105 transition-all shadow-lg group">
                <Icon name="Phone" size={18} className="mr-2 group-hover:rotate-12 transition-transform" />
                Заказать технику
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Equipment;

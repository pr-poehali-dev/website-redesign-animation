import Navigation from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const reviews = [
  {
    name: 'Андрей Соколов',
    position: 'Директор ООО "СтройИнвест"',
    project: 'ТЦ "Европейский"',
    rating: 5,
    date: '15 ноября 2024',
    text: 'Профессиональная команда, качественное выполнение работ в срок. Объект сдан точно по графику, все замечания оперативно устранялись. Особо отмечу четкую коммуникацию и прозрачность на всех этапах. Рекомендуем НТМ-Москва как надежного подрядчика!',
    verified: true,
  },
  {
    name: 'Елена Морозова',
    position: 'Управляющая ТЦ "Европейский"',
    project: 'ТЦ "Европейский"',
    rating: 5,
    date: '10 ноября 2024',
    text: 'Отличный результат! Торговый центр построен с соблюдением всех технических требований. Качество отделки на высоком уровне. Приятно удивила оперативность решения возникающих вопросов. Спасибо за профессионализм!',
    verified: true,
  },
  {
    name: 'Михаил Петров',
    position: 'Технический директор "Техпром"',
    project: 'Завод "Техпром"',
    rating: 5,
    date: '5 ноября 2024',
    text: 'Работали над сложным промышленным объектом. Все технические требования соблюдены, документация оформлена безупречно. Особо благодарим инженерный отдел за грамотные технические решения. Планируем дальнейшее сотрудничество.',
    verified: true,
  },
  {
    name: 'Ольга Волкова',
    position: 'Владелец ООО "Девелопмент"',
    project: 'ЖК "Северный"',
    rating: 5,
    date: '1 ноября 2024',
    text: 'Большой жилой комплекс построен в срок и с отличным качеством. Жители довольны, замечаний практически нет. НТМ-Москва показали себя как ответственный подрядчик, который держит свое слово. Рекомендуем!',
    verified: true,
  },
  {
    name: 'Дмитрий Смирнов',
    position: 'Генеральный директор "Альфа Групп"',
    project: 'Бизнес-центр "Столица"',
    rating: 5,
    date: '28 октября 2024',
    text: 'Офисный центр класса А выполнен на высшем уровне. Современные инженерные системы, качественная отделка, все по проекту. Сроки соблюдены. Отдельное спасибо за гибкость при внесении изменений в процессе строительства.',
    verified: true,
  },
  {
    name: 'Сергей Иванов',
    position: 'Представитель администрации',
    project: 'Социальный объект',
    rating: 5,
    date: '20 октября 2024',
    text: 'Работа выполнена качественно, в установленные сроки. Все требования муниципального заказа выполнены. Документация подготовлена в полном объеме. Спасибо за ответственный подход к социально значимому проекту!',
    verified: true,
  },
  {
    name: 'Наталья Козлова',
    position: 'Управляющая сетью магазинов',
    project: 'Торговые павильоны',
    rating: 5,
    date: '15 октября 2024',
    text: 'Построили 5 торговых павильонов в разных районах города. Везде одинаково высокое качество работ. Сроки соблюдены, цены адекватные. Очень довольны сотрудничеством, уже планируем новые объекты.',
    verified: true,
  },
  {
    name: 'Игорь Лебедев',
    position: 'Владелец производства',
    project: 'Складской комплекс',
    rating: 5,
    date: '10 октября 2024',
    text: 'Склад построили быстро и качественно. Все технические требования учтены, удобная планировка. Инженерные системы работают отлично. Цена соответствовала изначальной смете без скрытых доплат. Рекомендую!',
    verified: true,
  },
  {
    name: 'Татьяна Новикова',
    position: 'Директор гостиничной сети',
    project: 'Реконструкция отеля',
    rating: 5,
    date: '5 октября 2024',
    text: 'Провели реконструкцию исторического здания под отель. Работа была сложная, но результат превзошел ожидания. Сохранили архитектурные элементы, при этом внедрили современные системы. Большое спасибо команде НТМ!',
    verified: true,
  },
];

const stats = [
  { value: '4.9', label: 'Средний рейтинг', icon: 'Star' },
  { value: '500+', label: 'Отзывов', icon: 'MessageSquare' },
  { value: '98%', label: 'Рекомендаций', icon: 'ThumbsUp' },
  { value: '100%', label: 'Проверенных', icon: 'ShieldCheck' },
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6">Отзывы</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              Что говорят клиенты
            </h1>
            <p className="text-xl text-muted-foreground">
              Реальные отзывы о нашей работе от заказчиков проектов
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon name={stat.icon as any} size={40} className="text-primary mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{review.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{review.position}</p>
                    </div>
                    {review.verified && (
                      <Badge className="shrink-0 gap-1">
                        <Icon name="ShieldCheck" size={14} />
                        Проверено
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="mb-4">Проект: {review.project}</Badge>
                  <p className="text-muted-foreground italic mb-4">"{review.text}"</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="Calendar" size={12} />
                    <span>{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Оставьте свой отзыв
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Если вы работали с нами, мы будем благодарны за ваше мнение о нашей работе
            </p>
            <Button size="lg" className="hover:scale-105 transition-transform">
              <Icon name="MessageSquare" className="mr-2" size={20} />
              Написать отзыв
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

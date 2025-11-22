import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const articles = [
    {
      title: 'Тренды строительства в 2024 году',
      icon: 'TrendingUp',
      date: '15 ноября 2024',
      category: 'Аналитика',
      excerpt: 'Обзор ключевых тенденций в строительной индустрии: экологичность, цифровизация, новые материалы и технологии.',
      readTime: '5 мин'
    },
    {
      title: 'BIM-технологии: будущее строительства',
      icon: 'Layers',
      date: '10 ноября 2024',
      category: 'Технологии',
      excerpt: 'Как информационное моделирование зданий революционизирует проектирование и строительство объектов.',
      readTime: '7 мин'
    },
    {
      title: 'Зеленое строительство в мегаполисах',
      icon: 'Leaf',
      date: '5 ноября 2024',
      category: 'Экология',
      excerpt: 'Рассказываем об экологичных подходах к строительству и их внедрении в городской среде.',
      readTime: '6 мин'
    },
    {
      title: 'Безопасность на стройплощадке',
      icon: 'Shield',
      date: '1 ноября 2024',
      category: 'Безопасность',
      excerpt: 'Важность соблюдения норм безопасности и современные методы контроля рисков на строительных объектах.',
      readTime: '4 мин'
    },
    {
      title: 'Реконструкция исторических зданий',
      icon: 'Landmark',
      date: '25 октября 2024',
      category: 'Реконструкция',
      excerpt: 'Особенности работы с объектами культурного наследия и сохранение исторического облика.',
      readTime: '8 мин'
    },
    {
      title: 'Умные здания: технологии будущего',
      icon: 'Cpu',
      date: '20 октября 2024',
      category: 'Инновации',
      excerpt: 'Интеграция IoT, автоматизация и системы управления в современных зданиях.',
      readTime: '6 мин'
    }
  ];

  const categories = [
    { name: 'Все статьи', count: 24, icon: 'BookOpen' },
    { name: 'Технологии', count: 8, icon: 'Cpu' },
    { name: 'Аналитика', count: 6, icon: 'TrendingUp' },
    { name: 'Безопасность', count: 5, icon: 'Shield' },
    { name: 'Экология', count: 5, icon: 'Leaf' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Блог НТМ-Москва
          </h1>
          <p className="text-lg text-muted-foreground">
            Новости, статьи и экспертные материалы о строительстве
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          <div className="lg:col-span-1">
            <Card className="glass-effect border-primary/20 sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Категории</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 transition-colors text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon name={category.icon as any} size={18} className="text-primary" />
                        <span className="group-hover:text-primary transition-colors">{category.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{category.count}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-slide-up border-2 border-transparent hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <Icon name={article.icon as any} size={24} className="text-white" />
                      </div>
                      <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={12} />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={12} />
                          {article.readTime}
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full mt-4 group/btn">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="gradient-primary hover:scale-105 transition-all shadow-lg">
                <Icon name="Plus" size={18} className="mr-2" />
                Загрузить ещё статьи
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

interface SearchResult {
  title: string;
  path: string;
  category: string;
  icon: string;
  description: string;
}

const searchData: SearchResult[] = [
  { title: 'Главная', path: '/', category: 'Страницы', icon: 'Home', description: 'Главная страница сайта' },
  { title: 'О компании', path: '/about', category: 'Страницы', icon: 'Building2', description: 'История и миссия компании' },
  { title: 'Услуги', path: '/services', category: 'Страницы', icon: 'Wrench', description: 'Наши строительные услуги' },
  { title: 'Проекты', path: '/projects', category: 'Страницы', icon: 'FolderOpen', description: 'Портфолио проектов' },
  { title: 'Персонал', path: '/team', category: 'Страницы', icon: 'Users', description: 'Наша команда' },
  { title: 'Материалы', path: '/materials', category: 'Каталог', icon: 'Package', description: 'Строительные материалы' },
  { title: 'Технологии', path: '/technologies', category: 'Каталог', icon: 'Cpu', description: 'Современные технологии' },
  { title: 'Техника', path: '/equipment', category: 'Каталог', icon: 'Truck', description: 'Строительная техника' },
  { title: 'Безопасность', path: '/safety', category: 'Информация', icon: 'Shield', description: 'Техника безопасности' },
  { title: 'Клиенты', path: '/clients', category: 'Информация', icon: 'Handshake', description: 'Наши клиенты и отзывы' },
  { title: 'Карьера', path: '/careers', category: 'Информация', icon: 'Briefcase', description: 'Вакансии и карьера' },
  { title: 'Блог', path: '/blog', category: 'Контент', icon: 'BookOpen', description: 'Статьи и новости' },
  { title: 'FAQ', path: '/faq', category: 'Помощь', icon: 'HelpCircle', description: 'Часто задаваемые вопросы' },
  { title: 'Экология', path: '/sustainability', category: 'Информация', icon: 'Leaf', description: 'Экологичное строительство' },
  { title: 'Инновации', path: '/innovations', category: 'Информация', icon: 'Rocket', description: 'R&D и инновации' },
  { title: 'Новости', path: '/news', category: 'Контент', icon: 'Newspaper', description: 'Новости компании' },
  { title: 'Сертификаты', path: '/certificates', category: 'Документы', icon: 'Award', description: 'Наши сертификаты' },
  { title: 'Партнеры', path: '/partners', category: 'Информация', icon: 'Users', description: 'Наши партнеры' },
  { title: 'Галерея', path: '/gallery', category: 'Медиа', icon: 'Image', description: 'Фотогалерея проектов' },
  { title: 'Отзывы', path: '/reviews', category: 'Информация', icon: 'MessageSquare', description: 'Отзывы клиентов' },
  { title: 'Контакты', path: '/contacts', category: 'Страницы', icon: 'Phone', description: 'Связаться с нами' },
];

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Search({ isOpen, onClose }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim() === '') {
      setResults(searchData.slice(0, 8));
    } else {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
    setQuery('');
  };

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 animate-pulse-slow"></div>
          <div className="relative flex items-center gap-3 p-4 border-b">
            <Icon name="Search" size={24} className="text-primary animate-float" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск по сайту... (попробуйте 'материалы' или 'карьера')"
              className="border-0 focus-visible:ring-0 text-lg bg-transparent"
              autoFocus
            />
            <kbd className="px-2 py-1 text-xs bg-muted rounded">ESC</kbd>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          {results.length > 0 ? (
            <div className="space-y-2">
              {results.map((result, index) => (
                <Card
                  key={result.path}
                  className="p-4 cursor-pointer group hover:shadow-xl transition-all duration-300 hover:-translate-x-2 animate-slide-in border-l-4 border-transparent hover:border-primary"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => handleSelect(result.path)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                      <Icon name={result.icon as any} size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold group-hover:text-primary transition-colors">{result.title}</h3>
                        <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    </div>
                    <Icon 
                      name="ArrowRight" 
                      size={20} 
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" 
                    />
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 animate-fade-in">
              <Icon name="SearchX" size={64} className="text-muted-foreground/30 mx-auto mb-4 animate-float" />
              <p className="text-muted-foreground">Ничего не найдено</p>
              <p className="text-sm text-muted-foreground/70">Попробуйте изменить запрос</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const navItems = [
  { name: 'Главная', path: '/' },
  { name: 'О компании', path: '/about' },
  { name: 'Услуги', path: '/services' },
  { name: 'Проекты', path: '/projects' },
  { name: 'Персонал', path: '/team' },
  { name: 'Материалы', path: '/materials' },
  { name: 'Технологии', path: '/technologies' },
  { name: 'Техника', path: '/equipment' },
  { name: 'Безопасность', path: '/safety' },
  { name: 'Клиенты', path: '/clients' },
  { name: 'Карьера', path: '/careers' },
  { name: 'Блог', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Экология', path: '/sustainability' },
  { name: 'Инновации', path: '/innovations' },
  { name: 'Новости', path: '/news' },
  { name: 'Сертификаты', path: '/certificates' },
  { name: 'Партнеры', path: '/partners' },
  { name: 'Галерея', path: '/gallery' },
  { name: 'Отзывы', path: '/reviews' },
  { name: 'Контакты', path: '/contacts' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-lg border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
              <span className="text-2xl font-bold text-white">НТМ</span>
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-bold text-gradient">НТМ-Москва</div>
              <div className="text-xs text-muted-foreground">Строительная компания</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-white gradient-primary shadow-md'
                    : 'text-secondary hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button className="hidden md:flex gap-2 gradient-primary hover:scale-105 transition-all shadow-lg hover:shadow-xl group">
              <Icon name="Phone" size={18} className="group-hover:rotate-12 transition-transform" />
              <span>Связаться</span>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all hover:bg-primary/10 hover:text-primary ${
                        location.pathname === item.path
                          ? 'text-primary bg-primary/10'
                          : 'text-secondary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold">НТМ</span>
              </div>
              <span className="font-bold text-lg">НТМ-Москва</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Строительная компания полного цикла
            </p>
            <div className="flex gap-3">
              <a 
                href="https://t.me/stroitelstvo_ntm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative w-12 h-12 gradient-primary rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg hover:shadow-2xl group animate-glow"
                title="Telegram-канал НТМ Строительство"
              >
                <Icon name="Send" size={22} className="text-white group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-secondary"></span>
              </a>
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all hover:scale-110 shadow-lg">
                <Icon name="MessageCircle" size={22} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all hover:scale-110 shadow-lg">
                <Icon name="Youtube" size={22} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all hover:scale-110 shadow-lg">
                <Icon name="Instagram" size={22} />
              </a>
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl backdrop-blur-sm border border-primary/20">
              <div className="flex items-center gap-2 text-sm mb-2">
                <Icon name="TrendingUp" size={18} className="text-primary animate-bounce-slow" />
                <span className="text-white font-semibold">Новости строительства</span>
              </div>
              <p className="text-xs text-gray-300">Подпишитесь на наш Telegram — свежие проекты, технологии, вакансии</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition">Главная</a></li>
              <li><a href="/about" className="hover:text-white transition">О нас</a></li>
              <li><a href="/services" className="hover:text-white transition">Услуги</a></li>
              <li><a href="/projects" className="hover:text-white transition">Проекты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/news" className="hover:text-white transition">Новости</a></li>
              <li><a href="/career" className="hover:text-white transition">Карьера</a></li>
              <li><a href="/certificates" className="hover:text-white transition">Сертификаты</a></li>
              <li><a href="/partners" className="hover:text-white transition">Партнеры</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@ntm-msk.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, ул. Строителей, 1
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 НТМ-Москва. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
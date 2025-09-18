import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">Курский аккумуляторный завод</h1>
              <p className="text-sm text-muted-foreground">Качественные аккумуляторы с 1955 года</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукция</a>
              <a href="#production" className="text-foreground hover:text-primary transition-colors">Производство</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О заводе</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button>
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-800">
                Надежность проверенная временем
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Аккумуляторы<br />
                <span className="text-primary">мирового качества</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Производим автомобильные и промышленные аккумуляторные батареи с применением 
                современных технологий. Гарантируем долговечность и надежность продукции.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 bg-orange-600 hover:bg-orange-700">
                  <Icon name="Battery" size={20} className="mr-2" />
                  Выбрать аккумулятор
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Найти дилера
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/eb10f447-9b42-45e0-bc02-4af684831674.jpg" 
                alt="Производство аккумуляторов на Курском заводе"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">69</div>
              <div className="text-primary-foreground/80">Лет производства</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2М+</div>
              <div className="text-primary-foreground/80">Аккумуляторов в год</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Дилерских центров</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-primary-foreground/80">Доля российского рынка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Линейка продукции</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр аккумуляторных батарей для автомобилей, грузовиков и промышленной техники
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-orange-200">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Car" size={24} className="text-orange-600" />
                </div>
                <CardTitle>Легковые автомобили</CardTitle>
                <CardDescription>
                  Аккумуляторы для легковых автомобилей всех классов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Емкость: 45-100 А·ч</li>
                  <li>• Пусковой ток: 360-850 А</li>
                  <li>• Гарантия: 3 года</li>
                  <li>• Необслуживаемые модели</li>
                </ul>
                <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                  Подобрать аккумулятор
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Truck" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Грузовой транспорт</CardTitle>
                <CardDescription>
                  Мощные батареи для грузовиков и коммерческого транспорта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Емкость: 140-225 А·ч</li>
                  <li>• Пусковой ток: 850-1400 А</li>
                  <li>• Гарантия: 2 года</li>
                  <li>• Усиленная конструкция</li>
                </ul>
                <Button className="w-full mt-4">
                  Выбрать модель
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-green-600" />
                </div>
                <CardTitle>Промышленные АКБ</CardTitle>
                <CardDescription>
                  Стационарные и тяговые аккумуляторы для промышленности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Напряжение: 2-48 В</li>
                  <li>• Срок службы: до 20 лет</li>
                  <li>• Циклическое использование</li>
                  <li>• Индивидуальные решения</li>
                </ul>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  Получить предложение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section id="production" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Современное производство</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Завод оснащен самым современным европейским оборудованием для производства 
                свинцово-кислотных аккумуляторных батарей. Полный цикл производства — от 
                изготовления пластин до финальной сборки.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">ISO 9001</div>
                  <div className="text-sm text-muted-foreground">Сертификат качества</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Режим работы</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span>Автоматизированные линии производства</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span>Многоступенчатый контроль качества</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span>Экологически чистые технологии</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/f1e0aaac-2cf0-4f3e-85c1-ffb4faecb88a.jpg" 
                alt="Аккумуляторы Курского завода"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Гарантия качества</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <Icon name="Award" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Сертификация</h3>
              <p className="text-white/90">
                Продукция соответствует международным стандартам качества и безопасности
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <Icon name="TestTube" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Испытания</h3>
              <p className="text-white/90">
                Каждая партия проходит комплексные испытания в собственной лаборатории
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <Icon name="Headphones" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Поддержка</h3>
              <p className="text-white/90">
                Техническая поддержка и консультации по выбору и эксплуатации
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">История завода</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Курский аккумуляторный завод — одно из старейших предприятий отрасли в России, 
              основанное в 1955 году для обеспечения автомобильной промышленности СССР качественными аккумуляторами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">1955</div>
              <div className="font-semibold mb-2">Основание завода</div>
              <div className="text-sm text-muted-foreground">Начало производства аккумуляторов в Курске</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">1980</div>
              <div className="font-semibold mb-2">Модернизация</div>
              <div className="text-sm text-muted-foreground">Внедрение новых технологий производства</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">2000</div>
              <div className="font-semibold mb-2">Расширение</div>
              <div className="text-sm text-muted-foreground">Запуск линии промышленных АКБ</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">2024</div>
              <div className="font-semibold mb-2">Инновации</div>
              <div className="text-sm text-muted-foreground">Внедрение цифровых технологий</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dealers Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Дилерская сеть</h2>
            <p className="text-lg text-muted-foreground">
              Более 500 официальных дилеров по всей России и странам СНГ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="MapPin" size={48} className="text-orange-600 mx-auto mb-4" />
                <CardTitle>Центральный регион</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">150+</p>
                <p className="text-muted-foreground">дилерских центров</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Truck" size={48} className="text-blue-600 mx-auto mb-4" />
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">24ч</p>
                <p className="text-muted-foreground">по Курской области</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Wrench" size={48} className="text-green-600 mx-auto mb-4" />
                <CardTitle>Сервис</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">24/7</p>
                <p className="text-muted-foreground">техническая поддержка</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами для получения консультации или размещения заказа
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Icon name="Phone" size={24} className="text-primary mb-4" />
                <CardTitle>Отдел продаж</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+7 (4712) 555-123</p>
                <p className="text-sm text-muted-foreground">Пн-Пт: 8:00-17:00</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Mail" size={24} className="text-primary mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">sales@kaz-kursk.ru</p>
                <p className="text-sm text-muted-foreground">Ответ в течение часа</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="MapPin" size={24} className="text-primary mb-4" />
                <CardTitle>Адрес завода</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">г. Курск</p>
                <p className="text-sm text-muted-foreground">ул. Промышленная, 45</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Icon name="Clock" size={24} className="text-primary mb-4" />
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Пн-Сб</p>
                <p className="text-sm text-muted-foreground">8:00 - 18:00</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="text-lg px-8 bg-orange-600 hover:bg-orange-700 mr-4">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Заказать звонок
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Курский аккумуляторный завод</h3>
              <p className="text-background/80 mb-4">
                Производство качественных аккумуляторных батарей с 1955 года. 
                Надежность, проверенная временем.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-background/80">
                <li>Автомобильные АКБ</li>
                <li>Грузовые аккумуляторы</li>
                <li>Промышленные батареи</li>
                <li>Стационарные АКБ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/80">
                <li>Продажа аккумуляторов</li>
                <li>Техническая поддержка</li>
                <li>Гарантийный сервис</li>
                <li>Утилизация АКБ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/80">
                <p>+7 (4712) 555-123</p>
                <p>sales@kaz-kursk.ru</p>
                <p>г. Курск, ул. Промышленная, 45</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-background/20" />
          <div className="text-center text-background/60">
            <p>&copy; 2024 Курский аккумуляторный завод. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
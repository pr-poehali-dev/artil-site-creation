import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary">ООО "АРТИЛЬ"</h1>
              <p className="text-sm text-muted-foreground">Надежные решения для промышленности</p>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#equipment" className="text-foreground hover:text-primary transition-colors">Оборудование</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button variant="outline">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Более 15 лет на рынке
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Профессиональные<br />
                <span className="text-primary">насосные решения</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Поставка, монтаж и сервисное обслуживание промышленного насосного оборудования. 
                Гарантируем качество и надежность для вашего производства.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Wrench" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Каталог продукции
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/79d912d7-a915-4c98-ab4f-b5ed535e7545.jpg" 
                alt="Промышленное насосное оборудование"
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
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Выполненных проектов</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Лет опыта</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Техническая поддержка</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-primary-foreground/80">Гарантия качества</div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Наше оборудование</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент насосного оборудования для различных отраслей промышленности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Droplets" size={24} className="text-primary" />
                </div>
                <CardTitle>Центробежные насосы</CardTitle>
                <CardDescription>
                  Высокопроизводительные насосы для водоснабжения и водоотведения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Производительность до 2000 м³/ч</li>
                  <li>• Напор до 150 м</li>
                  <li>• Энергоэффективность класса IE3</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cog" size={24} className="text-primary" />
                </div>
                <CardTitle>Винтовые насосы</CardTitle>
                <CardDescription>
                  Надежные решения для перекачки вязких жидкостей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Работа с вязкими средами</li>
                  <li>• Самовсасывающие модели</li>
                  <li>• Низкий уровень шума</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <CardTitle>Погружные насосы</CardTitle>
                <CardDescription>
                  Специализированное оборудование для скважин и резервуаров
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Глубина погружения до 200 м</li>
                  <li>• Коррозионностойкие материалы</li>
                  <li>• Автоматическое управление</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный комплекс услуг от проектирования до сервисного обслуживания
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="ShoppingCart" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Продажа оборудования</h3>
                  <p className="text-muted-foreground mb-4">
                    Поставка сертифицированного насосного оборудования от ведущих европейских производителей
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-primary mr-2" />
                      Официальная гарантия производителя
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-primary mr-2" />
                      Техническая поддержка при выборе
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-primary mr-2" />
                      Поставка в кратчайшие сроки
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/img/78f4f854-6abf-4520-b573-1b79e2b6c568.jpg" 
                    alt="Ремонт оборудования"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Ремонт и обслуживание</h3>
                  <p className="text-muted-foreground mb-4">
                    Профессиональный ремонт и регулярное техническое обслуживание насосного оборудования
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-primary mr-2" />
                      Диагностика и устранение неисправностей
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-primary mr-2" />
                      Плановое техническое обслуживание
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-primary mr-2" />
                      Аварийный выезд 24/7
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">О компании АРТИЛЬ</h2>
              <p className="text-lg text-muted-foreground mb-6">
                ООО "АРТИЛЬ" — ведущий поставщик насосного оборудования в регионе с более чем 15-летним опытом работы. 
                Мы специализируемся на поставке, монтаже и сервисном обслуживании промышленных насосов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" size={20} className="text-primary" />
                  <span>Сертифицированные специалисты</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={20} className="text-primary" />
                  <span>Гарантия качества на все работы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span>Оперативное решение задач</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={20} className="text-primary" />
                  <span>Индивидуальный подход к каждому клиенту</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Наши преимущества</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Target" size={24} className="text-primary" />
                  </div>
                  <div className="font-semibold text-sm">Точность</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                  <div className="font-semibold text-sm">Скорость</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div className="font-semibold text-sm">Надежность</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Heart" size={24} className="text-primary" />
                  </div>
                  <div className="font-semibold text-sm">Качество</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами для получения консультации
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+7 (495) 123-45-67</p>
                <p className="text-sm text-muted-foreground">Звонки принимаются с 9:00 до 18:00</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@artil.ru</p>
                <p className="text-sm text-muted-foreground">Ответим в течение 1 часа</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">г. Москва</p>
                <p className="text-sm text-muted-foreground">ул. Промышленная, д. 15, оф. 201</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Заказать обратный звонок
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ООО "АРТИЛЬ"</h3>
              <p className="text-background/80 mb-4">
                Надежные решения для промышленности. Профессиональное насосное оборудование и сервис.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-background/80">
                <li>Продажа насосов</li>
                <li>Ремонт оборудования</li>
                <li>Техническое обслуживание</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/80">
                <p>+7 (495) 123-45-67</p>
                <p>info@artil.ru</p>
                <p>г. Москва, ул. Промышленная, д. 15</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-background/20" />
          <div className="text-center text-background/60">
            <p>&copy; 2024 ООО "АРТИЛЬ". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
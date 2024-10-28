import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { usePopupItem } from "../components/PopupItem";

const categories = [
  {
    name: "Выживание",
    items: [
      {
        id: 1,
        title: "Модер",
        price: 150,
        icon: "iron_sword.webp",
        description: `Возможность телепорт наверх /etop
Возможность телепорт координат /tppos
Возможность выдать опыт игроку /exp
Возможность вылечить игрока /heal
Возможность проверить баланс /balance
Возможность показать топ богачей /baltop
Возможность создатель варп /setwarp
Возможность запустить огненный шар /fireball
Возможность несколько точек дома /sethome
Возможность видеть игроков в ванише`,
      },
      {
        id: 2,
        title: "Хелпер",
        price: 300,
        icon: "golden_apple.webp",
        description: `Возможность использовать админ чат /ac
Возможность включить невидимку /vanish
Возможность телепорт к другим /tp
Возможность телепорт к себе /tphere
Возможность дюпнуть предмет /more
Возможность инфо о сервере /gc
Возможность сменить погоду /weather
Возможность изменить время мира /time
Возможность телепортировать блок /jump
Возможность игнорировать игрока /ignore
Возможность несколько точек дома /sethome`,
      },
      {
        id: 3,
        title: "Админ",
        price: 350,
        icon: "diamond_sword.webp",
        description: `Возможность выдать предупреждение /warn
Возможность убрать предупреждение /unwarn
Возможность отправить запрос тп /tpahere
Возможность последних заходов /seen
Возможность выдать бан /ban (на час)
Возможность разбанить игрока /unban
Возможность поджечь игрока /burn`,
      },
      {
        id: 4,
        title: "Антигрифер",
        price: 550,
        icon: "bedrock.webp",
        description: `Полный доступ WorldEdit &7(топорик)
Доступ к приватам (3 в день)
Возможность выдать бан /ban (на 24 часа)
Возможность выдать мут /mute (на 24 часа)
Возможность ставить любой ник /nick
Возможность выдавать донат /grant
Возможность посадить в тюрьму /jail
Возможность изменить скорость /speed
Возможность сменить цвет префикса /color
Приоритетная поддержка, если вы забудете пароль - мы восстановим вам аккаунт (по чеку)`,
      },
      {
        id: 5,
        title: "Владелец",
        price: 625,
        icon: "nether_star.webp",
        description: `Выдаются почти все команды сервера
Возможность мини-консоли /console
Возможность сделать стены //walls
Возможность сетать //set (увеличен х10)
Возможность убрать воду //drain
Возможность скопировать постройку //copy
Возможность вставить постройку //paste
Возможность выдать бан /ban
Возможность замутить /mute
Возможность делать пирамиду //pyramid
Возможность делать любой ник /nick`,
      },
    ],
  },
  {
    name: "Анархия",
    items: [
      {
        id: 1,
        title: "Воин",
        price: 150,
        icon: "iron_axe.webp",
        description: `Доступен набор Воин /kit warrior
Возможность открыть верстак /workbench
Возможность отправить запрос тп /tpahere
Возможность узнать свои координаты /getpos
Возможность отключить личку /msgtoggle
Возможность встать в афк режим /afk
Слотов на аукционе: 4
Регионов для привата: 3
Можно установить 2 сетхома (/sethome)
Зарплата 10$ раз в 5 минут`,
      },
      {
        id: 2,
        title: "Титан",
        price: 250,
        icon: "amethyst_shard.webp",
        description: `Доступен набор Титан /kit titan
Возможность одеть блок на голову /hat
Возможность восполнить голод /feed
Можно сменить погоду себе /pweather
Стрельнуть котиком /kittycannon
Стрельнуть пчелкой /beezoka
Слотов на аукционе: 7
Регионов для привата: 5
Можно установить 3 сетхома (/sethome)
Зарплата 20$ раз в 5 минут`,
      },
      {
        id: 3,
        title: "Странник",
        price: 375,
        icon: "ender_pearl.webp",
        description: `Доступен набор Странник /kit wanderer
Возможность написать в админ-чат /ac
Возможность открыть эндер-сундук /ec
Возможность игнорировать игрока /ignore
Возможность очистить инвентарь /clear
Возможность инфо о сервере /gc
Слотов на аукционе: 8
Регионов для привата: 6
Можно установить 4 сетхома (/sethome)
Зарплата 30$ раз в 5 минут`,
      },
      {
        id: 4,
        title: "Каратель",
        price: 450,
        icon: "tnt.webp",
        description: `Каратель:
Доступен набор Каратель /kit punisher
Возможность писать объявление /mbc
Возможность отключить тп /tptoggle
Возможность включить свечение /glow
Можно сменить название предмета /setname
Можно замаскироваться под игрока /player
Можно открыть чужой инвентарь /invsee
Посмотреть чужую броню /invsee [ник] -a
Спавнер выпадет киркой на шёлк. касание
Слотов на аукционе: 12
Регионов для привата: 8
Можно установить 5 сетхома (/sethome)
Зарплата 40$ раз в 5 минут`,
      },
      {
        id: 5,
        title: "Легенда",
        price: 550,
        icon: "upgrade_smithing_template.webp",
        description: `Доступен набор Легенда /kit legend
Возможность выдать донат /grant
Возможность кикнуть игрока /kick
Возможность сменить ник /nick
Возможность узнать игроков рядом /near
Можно сменить погоду сервера /weather
Можно сменить время сервера /time set
Можно узнать реальное имя /realname
Можно починить все предметы /repair all
Возможность получить голову игрока /skull
Слотов на аукционе: 22
Регионов для привата: 10
Можно установить 6 сетхома (/sethome)
Зарплата 50$ раз в 5 минут`,
      },
      {
        id: 6,
        title: "Мастер",
        price: 625,
        icon: "nether_star.webp",
        description: `Доступен набор Мастер /kit master
Возможность выдать донат /grant
Возможность забанить игрока /ban (15 мин)
Возможность дать мут игроку /mute
Возможность снять мут /unmute
Возможность потушить себя /ext
Можно читать чужую личку /socialspy
Возможность вылечить себя /heal
Возможность создатель варп /setwarp
Возможность удалить свой варп /delwarp
Возможность посмотреть свои варпы /mywarps
Доступ к цветному чату § + Цифра цвета
Слотов на аукционе: 30
Регионов для привата: 14
Можно установить 10 сетхома (/sethome)
Зарплата 60$ раз в 5 минут`,
      },
      {
        id: 7,
        title: "Иммортал",
        price: 750,
        icon: "totem_of_undying.webp",
        description: `Доступен набор ИММОРТАЛ /kit immortal
Вечный иммунитет от бана/кика/мута и т.д.
Возможность выдать донат /grant (увелич. х2)
Возможность забанить игрока /ban (30 мин)
Возможность накормить игрока /feed <ник>
Cменить префикс в табе /tab prefix
Cменить префикс в чате /chat prefix
Можно зайти на полный сервер
Нет кика за АФК
Слотов на аукционе: 60
Регионов для привата: 20
Можно установить 15 сетхома (/sethome)
Зарплата 100$ раз в 5 минут`,
      },
    ],
  },
  {
    name: "Мини-игры",
    items: [
      {
        id: 1,
        title: "Iron",
        price: 100,
        icon: "iron_ingot.webp",
        description: `Сидеть в лобби /sit
Лежать в лобби /lay
Плевать в лобби /spit
Пожать руку в лобби /shakehand
Ползать в лобби /crawl
Лежать на животе в лобби /bellyflop
Крутиться в лобби /spin
Запустить фейерверк в лобби /fw
Одеть блок на голову в лобби /hat
Писать в игре и лобби желтым цветом &e`,
      },
      {
        id: 2,
        title: "Gold",
        price: 200,
        icon: "gold_ingot.webp",
        description: `Летать в лобби /fly
Обнять игрока в лобби /hug
Укусить игрока в лобби /bite
Изменить себе время в лобби /ptime
Изменить себе погоду в лобби /pweather
Писать в игре и лобби голубым цветом &b`,
      },
      {
        id: 3,
        title: "Emerald",
        price: 350,
        icon: "emerald.webp",
        description: `Доступно 5 мобов для превращения /dis
Изменить скорость в лобби /speed
Одеть голову другого игрока /skull
Стрельнуть фаерболом в лобби /fireball
Писать в игре и лобби зеленым цветом &a`,
      },
      {
        id: 4,
        title: "Diamond",
        price: 450,
        icon: "diamond.webp",
        description: `Доступно 12 мобов для превращения /dis
Изменить ник в лобби и игре /nick
Включить свечение в лобби /glow
Использовать быстрый старт игры
Писать в игре и лобби оранжевым цветом &6`,
      },
      {
        id: 5,
        title: "Nezerite",
        price: 550,
        icon: "netherite_ingot.webp",
        description: `Доступны ВСЕ мобы для превращения /dis
Установить сообщение при входе /jm
Выбрать цвет префикса в игре и лобби /color
Выбрать цвет свечения в лобби /glowcolor
Установить любой ник в игре и лобби /nick
Отключить рекламу в игре и лобби /settings
Писать в игре и лобби любым цветом &+цвет
Понижена задержка на чат (1 сек.)
Бесконечный выбор карт
Нет кика за афк`,
      },
    ],
  },
];

function Home() {
  const { showPopup } = usePopupItem();

  return (
    <div className="flex h-full flex-1 flex-col gap-3 overflow-auto bg-slate-700 p-6">
      <div
        className="flex h-52 w-full flex-col items-center justify-center gap-3 rounded-xl border-t border-white/20 bg-slate-800 bg-cover bg-center p-5 focus:outline-none"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(100, 100, 100, 0.7), transparent), url('/img/cover.png')",
        }}
      >
        <img src="/img/title.png" alt="PixVerse" className="max-w-xs"></img>
        <h1 className="minecraft-five text-xl text-white text-outline">
          mc.pixverse.org
        </h1>
        <h2 className="minecraft-five text-xl text-white text-outline">
          1.18.x - 1.21.x
        </h2>
      </div>
      <div className="w-full">
        <TabGroup>
          <TabList className="flex justify-center gap-3">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-md px-3 py-2 font-semibold text-white outline-none transition-all duration-200 ease-in-out focus:outline-none data-[hover]:bg-gray-600 data-[selected]:bg-gray-800"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, items }) => (
              <TabPanel
                key={name}
                className="flex flex-wrap justify-center gap-3"
              >
                {items.map((item) => (
                  <article
                    key={item.id}
                    className="group relative h-40 w-full cursor-pointer overflow-hidden rounded-2xl border-t border-white/20 bg-slate-600 p-3 transition-all duration-200 ease-in-out focus:outline-none active:scale-95 sm:w-72 md:w-1/3 lg:w-1/4"
                    onClick={() =>
                      showPopup(item.title, item.description, item.id)
                    }
                  >
                    <span className="absolute inset-0 z-30 rounded-2xl bg-gradient-to-b from-transparent to-indigo-400 opacity-0 transition-opacity duration-200 group-hover:opacity-40"></span>

                    <header className="absolute left-0 top-0 z-30 flex h-full w-full flex-1 flex-col justify-between rounded-2xl bg-white/5 p-3">
                      <h1 className="minecraft-five m-0 p-0 text-xl leading-none text-white text-outline">
                        {item.title}
                      </h1>
                      <label className="minecraft-five m-0 p-0 text-2xl leading-none text-white text-outline">
                        {item.price} руб.
                      </label>
                    </header>

                    <div className="bg-grainy absolute left-0 top-0 z-30 h-full w-full flex-1 rounded-2xl p-3 opacity-15"></div>

                    <div
                      className={`absolute right-0 top-1/2 z-20 flex -translate-y-1/2 flex-row justify-end rounded-2xl p-3`}
                    >
                      <img
                        src={`/img/items/${item.icon}`}
                        alt="Item"
                        className="w-24 brightness-90 filter transition-transform duration-300 ease-out group-hover:-translate-y-2"
                      />
                    </div>

                    <div
                      className="absolute left-0 top-0 z-10 h-full w-full rounded-2xl"
                      style={{
                        backdropFilter: "blur(1px)",
                      }}
                    ></div>
                    <div
                      className={`absolute right-0 top-1/2 z-0 flex -translate-y-1/2 flex-row justify-end p-3`}
                    >
                      <img
                        src={`/img/items/${item.icon}`}
                        alt="Item"
                        className="w-24 -translate-x-5 translate-y-5 brightness-50 filter transition-transform duration-300 ease-out group-hover:-translate-x-6 group-hover:-translate-y-5"
                      />
                    </div>
                  </article>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

export default Home;

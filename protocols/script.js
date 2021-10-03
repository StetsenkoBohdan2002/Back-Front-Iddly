"use strict";

function fun1() {
   let options = document.getElementById("mySelect").value;
   let name = document.getElementById("Name");
   console.log(options.checked);
   if (options === "ІВ-93" || options.checked) {
      name.innerHTML = "Стеценко Богдан та Гулак Іван";
   } else {
      name.innerHTML = "Губенко Владислав";
   }
}
let buttons = document.getElementsByClassName("left-part__item");
let buttons_2 = document.getElementsByClassName("left-part__item-second");
let opuc = document.getElementById("code");
let divText = document.getElementById("right-part");
let code = document.getElementById("code");
let code_2 = document.getElementById("code_2");
let text = document.querySelector(".text");


let lab1 = document.querySelectorAll('.labs__button')
console.log(lab1);
let main1 = document.querySelector('.main_1');
let main2 = document.querySelector('.main_2');

lab1[0].addEventListener('click', function () {
   if (main1.style.display === 'none') {
      main2.style.display = 'none';
      main1.style.display = 'block';
      protocolFirst();
   } else {
      main2.style.display = 'none';
      main1.style.display = 'none'
   }

})

lab1[1].addEventListener('click', function () {
   if (main2.style.display === 'none') {
      main1.style.display = 'none';
      main2.style.display = 'block';
      protocolSecond();
   } else {
      main1.style.display = 'none';
      main2.style.display = 'none'
   }
})

function protocolFirst() {
   buttons[0].addEventListener("click", function () {
      code.textContent = `
   Цей проект буде демонструвати виконання лабораторних робіт, бригадою №4 на прикладі сайту з надання допомоги в програмному забезпечені 
   та створенні веб-сервісів.
   Предметною областю є робота компанії наж наданням послуг, зокрема верстка сайті, створення функціоналу, повне проектування сайт роботи.
   Основною метою роботи Iddly є розробка веб-сервісів різної складності, надання допомоги у розробці та дизайні. Таким чином,
   бажаючі отримати послуги стаюсь замовниками нашого сервісу.Бажаючі отримати консультацію, можуть залишити заяву, заповнивши форму 
   на головній сторінці.

   Цей продукт розробляється для користування таких груп людей:
      - для компаній(розробка веб-сервісів, дизайну та верстка макету, відповідно до потреб замовника)
      - для публічних персон(створення сайті візиток)
      - для брендів(розробка веб-магазинів)
      - для громадських організацій(розробка сайті відповідно до потреб організації)

   Functionality — Функціональні вимоги: зворотній зв'язок з замовником, статистика, e-mail розсилки з гнучкими налаштуваннями.
   Usability — Вимоги до зручності використання (UX): гарний дизайн, юзабельність, відсутність речей, що відбивають бажання користуватися 
   веб-сервісом.
   Reliability — Вимоги до надійності: низька частота можливих збоїв, надійність.
   Performance — Вимоги до продуктивності: швидкий час відгуку, гнучке використання ресурсів, ефективність, потужність, масштабованість, 
   адаптивність.
   Supportability - Вимоги до підтримки: можливість підтримки, ремонтопридатність, гнучкість, доопрацювання. 
   `;
   });

   buttons[1].addEventListener("click", function () {
      code.innerHTML = `
   Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОГО ГАЛУЗІ. РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, 
   ФОРМАМИ в HTML-ДОКУМЕНТІ.

   Мета: придбати практичні навички роботи  з HTML-документом, таблицями,формами, зображеннями, посиланнями.
   Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.

   Лабораторна розташована за посиланням: <a target="_blank" href="https://github.com/Devy707/Back-Front-Iddly">https://github.com/Devy707/Back-Front-Iddly</a>
   `;
   });

   buttons[3].addEventListener("click", function () {
      code.textContent = `
   <section class="table-section">
   <div class="container">
   <table class="main-table">
     <tr>
       <th>Name</th>
       <th>Age</th>
       <th>Position</th>
     </tr>
     <tr>
       <td>Stetsenko Bogdan</td>
       <td>19</td>
       <td>Programmer, Team Lead</td>
     </tr>
     <tr>
       <td>Gulak Ivan</td>
       <td>19</td>
       <td>Programmer</td>
     </tr>
     <tr>
       <td>Gubenko Vlad</td>
       <td>19</td>
       <td>Programmer</td>
     </tr>
   </table>
 </div>
 </section>
   `;
   });

   buttons[5].addEventListener("click", function () {
      code.textContent = `
   <section class="project-section-images">
      <div class="project-section-images__content">
         <div class="project-section-images__image1">
         </div>
         <div class="project-section-images__image2">
         </div>
         <div class="project-section-images__image3">
         </div>
         <div class="project-section-images__image4"></div>
         </div>
      </div>
   </section>
   `;
   });

   buttons[4].addEventListener("click", function () {
      code.textContent = `
   <section class="form-section">
      <div class="conteiner">
         <div class="form-section__content">
            <form action="#" method="post">
               <input placeholder="+38" type="phone" name="usertel">
               <input placeholder="e-mail" type="text" name="useremail">
               <input placeholder="name" type="text" name="username">
               <input placeholder="surname" type="text" name="usersurname">
               <button class="form-section__button" type="submit">Contact US</button>
            </form>
         </div>
      </div>
   </section>
   `;
   });

   buttons[6].addEventListener("click", function () {
      code.textContent = `
   Під час лабораторної роботи ми придбали практичні навички роботи  з HTML-документом, таблицями,формами, зображеннями, посиланнями.
   Створили шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт. Також було на половину розроблено
   головну сторінку нашого веб-сервісу, де відображені усі результати роботи.
   
   `;
   });

}

function protocolSecond() {
   buttons_2[0].addEventListener("click", function () {
      code_2.textContent = `Если вам необходимо изменить внешний вид содержимого, которое находится в каком-либо теге, используйте CSS селекторы тегов. 
Допустим, вам нужно изменить шрифт и цвет всех тегов <h1>, которые имеются на веб-странице. Для этого вам понадобится создать стиль, 
где селектором будет h1 (обратите внимание: в CSS угловые скобки <> тега не записываются, а используется только его имя):

h2 {
   text-align: center;
   padding: 100px 0px 50px 0px;
   color: #ffe000;
   text-transform: uppercase;
}
* Код, указанный в качестве примера использовался в работе.

Написав один такой стиль, вы измените шрифт сразу для всех тегов <h2> на странице, сколько бы их ни было. 
Согласитесь, что это очень быстро и удобно. Аналогично можно создавать стили для других тегов, заменяя название селектора на нужное вам  
(p, h1, span, h3 и т. д.).`;
   });
   buttons_2[1].addEventListener("click", function () {
      code_2.textContent = `Классы CSS – это отличный инструмент, который расширяет возможности создания стилей в разы. 
Для лучшего понимания мы будем рассматривать всё на примерах.
   
Итак, чуть выше мы применили стиль для всех тегов <h2> на веб-странице – текст имеет выравнивание по центру, внутрений отступ сверху и снизу,
   верхний регистр всех букв и цвет в шестнадцатеричной форме записи. Но что делать, если вам понадобилось изменить цвет одного из тегов <h3> 
   на зеленый? На помощь приходят селекторы классов. Всё что вам необходимо сделать, это создать стиль,
   где селектор – придуманное вами имя класса. 
   Мы назовем класс greentext и запишем правило:

.greentext {
   color: green;
}
Но это еще не всё. Теперь, чтобы изменить цвет для одного из тегов <h2> на странице, нужно отредактировать HTML-документ, 
применив класс greentext к необходимому нам тегу. Записывается это так:

<h2 class="greentext"></h2>
Созданный класс можно применять к любым элементам веб-страницы. Вы можете придавать стиль не только целым заголовкам и абзацам,
   но и отдельным фрагментам страницы.

Запомните несколько правил написания классов:

- в CSS перед названием селектора класса обязательно ставится точка (но при присвоении класса в HTML-документе эта точка не нужна);
- в названии классов можно использовать только буквы латинского алфавита, дефис, символ подчеркивания, цифры;
- название класса всегда должно начинаться с буквы (правильные варианты названий: .labs__button, .labs-content, .main_2; 
   неправильные: .2main, .-link, ._divider);
- названия классов CSS чувствительны к регистру, поэтому классы вроде .review и .Review будут восприниматься как два отдельных.`;
   });
   buttons_2[2].addEventListener("click", function () {
      code_2.textContent = `Идентификатор определяет уникальное название элемента. Записывается он почти так же, как и класс,
только в CSS вместо точки ставится символ решетки #:
   
#Name {
   width: 310px;
   }
В HTML-документе идентификатор присваивается с помощью атрибута id:

<div id="right-part">
Возможно, у вас возник вопрос: в чем разница между идентификатором и классом? Существует несколько отличий:

ID – это уникальное название элемента на веб-странице, которое должно встречаться на ней только один раз 
(например, шапка сайта и подвал: id="header" и id="footer"), в то время как класс может присваиваться нескольким 
элементам с целью отличать их от остальных;
идентификаторы удобны для JavaScript-разработчиков, поскольку позволяют получить быстрый доступ к элементу DOM из скриптов 
(во многом именно поэтому необходимо, чтобы ID встречался на странице лишь один раз);
каждое правило CSS имеет свой так называемый вес (от веса зависит, какое из правил получит более высокий приоритет при выполнении). 
Идентификатор имеет больший вес, чем класс, поэтому, если элементу присвоен и ID, и класс, предпочтение отдается ID. Пример:
<p id="text" class="content">текст</p>
#text {
   color: yellow;
}

.content {
   color: blue;
}
У ID больший вес, поэтому цвет текста будет желтым (yellow).

с помощью идентификаторов можно ставить якорные ссылки на определенные элементы веб-страницы. Достаточно присвоить этому элементу ID:
<h3 id="description">Описание</h3>
и дать на него ссылку вида http://site.com/category/page/#description.`;
   });

   buttons_2[4].addEventListener("click", function () {
      code_2.textContent = `Соседними называются элементы веб-страницы, когда они следуют непосредственно друг за другом в коде документа.
Синтаксис: E + F { Описание правил стиля }

Для управления стилем соседних элементов используется символ плюса (+), который устанавливается между двумя селекторами E и F. 
Пробелы вокруг плюса не обязательны. Стиль при такой записи применяется к элементу F, но только в том случае, если он является 
соседним для элемента E и следует сразу после него. Рассмотрим несколько примеров.

<p>Lorem ipsum <b>dolor</b> sit amet.</p>

Элемент <b> является дочерним по отношению к <p>, поскольку он находится внутри этого контейнера. Соответственно <p> выступает 
в качестве родителя <b>.

<p>Lorem ipsum <b>dolor</b>  <var>sit</var> amet.</p>

Элементы <var> и <b> никак не перекрываются и представляют собой соседние элементы. То, что они расположены внутри контейнера <p>,
   не влияет на их отношение.

<p>Lorem <b>ipsum </b> dolor sit amet, <i>consectetuer</i> adipiscing <tt>elit</tt>.</p>

Соседними здесь являются элементы <b> и <i>, а также <i> и <tt>. При этом <b> и <tt> к соседним элементам не относятся из-за того,
что между ними расположен контейнер <i>.`;
   });

   buttons_2[5].addEventListener("click", function () {
      code_2.textContent = `Дочерним называется элемент, который непосредственно располагается внутри родительского элемента. 
Какой элемент выступает родителем, а какой его потомком легко выяснить с помощью дерева элементов — так называется структура 
отношений элементов документа между собой

<body>
   <div>
      <p>Text</p>
   <p>
   <strong>Text</strong>
   </p>
   </div>
</body>

На приведённом выше примере в удобном виде представлена вложенность элементов и их иерархия. 
Здесь дочерним элементом по отношению к <div> выступает элемент <p>. Вместе с тем <strong> не является дочерним для элемента <div>,
   поскольку он расположен в контейнере <p>.

Синтаксис: 
E > F { Описание правил стиля }

Стиль применяется к элементу F, только когда он является дочерним для элемента E.`;
   });

   buttons_2[6].addEventListener("click", function () {
      code_2.textContent = `Устанавливает стиль для элемента, если задан специфичный атрибут. Его значение в данном случае не важно.

Синтаксис
[<атрибут>] { Описание правил стиля }
E[<атрибут>] { Описание правил стиля }

Пример:

HTML:
<body>
   <div class="wrapper">
      <p>Lorem, ipsum dolor.</p>
      <p atr="мой атрибут">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, numquam?</p>
   </div>
</body>

CSS:
p{
   font-size: 30px;
   font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
p[atr]{
   color: red;
}

В данном примере меняется цвет текста внутри параграфа <p>, когда к нему добавляется атрибут atr. 
Обратите внимание, что для селектора p[atr] нет нужды повторять стилевые свойства, поскольку они наследуются от селектора p.`;
   });

   buttons_2[7].addEventListener("click", function () {
      code_2.textContent = `Иногда требуется установить одновременно один стиль для всех элементов веб-страницы,
например, задать шрифт или начертание текста. В этом случае поможет универсальный селектор, который соответствует
любому элементу веб-страницы.

Синтаксис
* { Описание правил стиля }

Для обозначения универсального селектора применяется символ звёздочки (*). В некоторых случаях указывать 
универсальный селектор не обязательно. Так, например, записи *.class и .class являются идентичными по своему результату.

Пример использование универсального селектора в нашей ЛР№2:

*,
*::after,
*::before {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}`;
   });

   buttons_2[9].addEventListener("click", function () {
      code_2.textContent = `Маркированный список определяется тем, что перед каждым элементом списка добавляется небольшой маркер,
обычно в виде закрашенного кружка. Сам список формируется с помощью контейнера <ul>, а каждый пункт списка начинается с тега <li>.
В списке непременно должен присутствовать закрывающий тег </ul> или </ol>, иначе возникнет ошибка. 
Закрывающий тег </li> хотя и не обязателен, но советуем всегда его добавлять, чтобы четко разделять элементы списка.
Ниже приведен пример, как можно использовать списки для создания меню. 
* Код без классов, чтобы было легко понять принцип

<nav>
   <ul>
      <li"><a>About</a></li>
      <li><a>Portfolio</a></li>
      <li><a>Labaratory</a>
         <ul>
            <li><a target="_blank" href="protocols/index-1.html">Labaratory work #1</a></li>
            <li><a target="_blank" href="protocols/index-2.html">Labaratory work #2</a></li>
            <li><a>Labaratory work #3</a></li>
            <li><a>Labaratory work #4</a></li>
            <li><a>Labaratory work #5</a></li>
            <li><a>Labaratory work #6</a></li>
            <li><a>Labaratory work #7</a></li>
            <li><a>Labaratory work #8</a></li>
            <li><a>Labaratory work #9</a></li>
         </ul>
      </li>
   </ul>
</nav>

Так же списки бывают еще нумероваными! Для них всё тоже самое но тег <ol>
Маркеры могут принимать один из трех видов: круг (по умолчанию type="disc"), окружность (type="circle") и квадрат (type="square").
   Для выбора стиля маркера используется атрибут type тега <ul>

Так же в виде маркеров можно использовать изображение. 
Для этого в каскадной таблице стилей для всех тегов <li> задаётся свойство background со значение url('адрес картинки') 0 0 no-repeat;`;
   });

   buttons_2[10].addEventListener("click", function () {
      code_2.textContent = `CSS имеет несколько опций для определения цвета текста и фоновых областей на веб-странице. 
Эти опции по работе с цветом не только заменяют аналогичные в простом HTML, но и дают массу новых возможностей. 
Например, традиционный путь для создания цветной области, заключается в применении таблицы. Стили позволяют отказаться 
от подобного использования таблиц предлагая более простые и удобные варианты управления цветом.

Ниже перечислены свойства элементов, предназначенных для задания цвета.

1) color;
2) background-color;
3) background-image;
4) background-repeat;
5) background-attachment;
6) background-position;

Установка цвета
Цвет, используя CSS, можно задавать тремя способами: словом, по его шестнадцатеричному значению и с помощью RGB и RGBA 
(Можно определить цвет используя значения красной, зеленой и синей составляющей в десятичном исчислении. 
   Значение каждого из трех цветов может принимать значения от 0 до 255. Также можно задавать цвет в процентном отношении).
RGBA это то же самое что и RGB просто добавлен альфа канал opacity.

Установка цвета фона и фонового рисунка
Цвет фона определяется значением свойства background-color, а изображение, которое используется в качестве фона,
   задается свойством background-image. Значением по умолчанию для цвета фона является transparent,
   которое устанавливает прозрачный фон. Для установки фонового рисунка используется абсолютный или относительный адрес к файлу.
   Рекомендуется задавать одновременно фоновый рисунок и цвет фона, который будет использоваться в случае недоступности файла изображения.

Если задано фоновое изображение, то свойство background-repeat определяет его повторяемость и способ, как это делать.
   Допустимыми значениями являются repeat (повторяемость по вертикали и горизонтали), repeat-x (по горизонтали),
   repeat-y (по вертикали) и no-repeat (только один рисунок, без повторения). 

Положение фона определяется свойством background-position.
   У него два значения, положение по горизонтали (может быть — right, left, center) и вертикали (может быть — top, bottom, center).
   Положение можно, также, задавать в процентах, пикселах или других абсолютных единицах

Свойство background-attachment: fixed фиксирует фон, чтобы он оставался неподвижным при прокрутке содержимого окна браузера.

Пример использования в коде HTML:

.header {
   background: url("header/bg/bg.jpg") center center / cover no-repeat;
   height: 1500px;
   }`;
   });

   buttons_2[11].addEventListener("click", function () {
      code_2.textContent = `Внутренний отступ - пустое пространство между содержимым элемента и его рамкой (если она установлена).
Для добавления и управления шириной внутренних отступов со всех четырех сторон элемента используется свойство padding.

Внешний отступ - пустое пространство, отделяющее элемент от других элементов или краев окна браузера.
   Для добавления и управления шириной внешних отступов со всех четырех сторон элемента используется свойство margin.

Свойства padding и margin могут принимать от одного до четырех значений:

padding: 0px 0px 0px 0px;
margin: 0px 0px 0px 0px;

Где значения устанавливаются по часовой стрелке, начиная с верхнего: 
padding: top, right, bottom, left;
margin: top, right, bottom, left;

Если у свойств указать всего одно значение, то отступы со всех сторон будут одинаковой ширины.


Для отступов, так же как и для рамок, есть свойства позволяющие управлять размером отступа с каждой стороны отдельно.
   Внутренние отступы регулируются свойствами: padding-top, padding-right, padding-bottom и padding-left. 
   Внешние отступы регулируются свойствами: margin-top, margin-right, margin-bottom и margin-left.

* значения свойств padding и margin не наследуются дочерними элементами, поэтому нужно указывать ширину отступов отдельно 
   для каждого элемента, которому они необходимы.`;
   });

   buttons_2[12].addEventListener("click", function () {
      code_2.textContent = `Плавающие элементы используются на веб-странице обычно для того, чтобы установить вокруг объекта обтекание текста.
В качестве таких объектов могут применяться рисунки или слои, содержащие изображения и надписи.
Для создания обтекания предназначено стилевое свойство float со значением left или right.
Значение left выравнивает слой, к которому добавлен float, по левому краю, а обтекание происходит по свободным сторонам.
Значение right, наоборот, выравнивает слой по правому краю.

Кроме такой очевидной ориентации плавающих элементов, с их помощью можно располагать слои по горизонтали и 
таким образом формировать колонки.Хотя свойство float исходно не предназначалось для такой роли, создание многоколонного 
макета веб-страницы на основе float достаточно устоялось.Такой способ имеет некоторые недостатки, но их можно учитывать 
и применять в своих целях.`;
   });


   // //родственные
   // buttons[5].addEventListener("click", function () {
   //    code.textContent = `Родственные селекторы по своему поведению похожи на соседние селекторы (запись вида E + F), но в отличие от них стилевые правила применяются ко всем ближайшим элементам. К примеру, для селектора h1~p стиль будет применяться ко всем элементам <p>, располагающихся после заголовка <h1>. При этом <h1> и <p> должны иметь общего родителя, так что если <p> вставить внутрь <div>, то стили применяться уже не будут.

   //    Здесь красный цвет текста будет установлен для всех абзацев.

   //    h1 ~ p { color: red; }
   //    <h1>Заголовок</h1>
   //    <p>Абзац 1</p>
   //    <p>Абзац 2</p>

   //    Здесь красный цвет текста будет установлен для первого и третьего абзацев. Ко второму абзацу стиль не применяется, поскольку <h1> и <p> не имеют общего родителя.

   //    h1 ~ p { color: red; }
   //    <h1>Заголовок</h1>
   //    <p>Абзац 1</p>
   //    <div><p>Абзац 2</p></div>
   //    <p>Абзац 3</p>

   //    Синтаксис E ~ F { Описание правил стиля }`;
   // });
}
function AssetsLoader() {

  PIXI.loaders.Loader.call(this);

}

AssetsLoader.prototype = Object.create(PIXI.loaders.Loader.prototype);
AssetsLoader.prototype.constructor = AssetsLoader;

AssetsLoader.prototype.assetsToLoad = function(resourceType) {
  // just return all resources at this time
  var resources = [];
  
  if(resourceType == 'game') {
  // Аналог concat со сведением в один массив
  //Array.prototype.push.apply(resources, this.getAssets(Assets.scene1));
  //Array.prototype.push.apply(resources, Assets.star());
  [].push.apply(resources,this.getAssets(Assets.iface));
  [].push.apply(resources,this.getAssets(Assets.scene1));
  [].push.apply(resources,this.getAssets(Assets.scene2));
  [].push.apply(resources,this.getAssets(Assets.scene3));
  [].push.apply(resources,this.getAssets(Assets.scene4));
  [].push.apply(resources,this.getAssets(Assets.scene5));
  [].push.apply(resources,this.getAssets(Assets.snow));
  //[].push.apply(resources,Assets.star());
  //[].push.apply(resources,Assets.zvezda());
  [].push.apply(resources,Assets.zvezdopad());
  //[].push.apply(resources,Assets.smoke());
  [].push.apply(resources,Assets.newSmoke());
  [].push.apply(resources,Assets.hover());

  //console.log(resources);
  } else if (resourceType == 'music') {
    [].push.apply(resources,Assets.music.preload);
  }


  if (Game.DEBUG) {
    console.log("Loading resources: " + resources.length);
  }
  return resources;
}

AssetsLoader.prototype.getAssets = function(assets) {
  var i,
      result = [];

  for(i in assets) {
    result.push(assets[i]);
  }
  return result;
}

Assets = {
  // JS doesnt have interface reserved word ... but
  user : {
    'userFirstName' : 'Костянтин',
    'userLastName' : 'Костянтинопольський',
    'fullName' : 'Overridden in user.js',
    'description' : 'Override user params by Implementing photo and data Ajax call in user.js',
    'photo' : "textures/interface/user_photo.png"
  },
  music : {
    preload : [
    'sound/mp3/1.mp3',
    'sound/mp3/2.mp3',
    'sound/mp3/3.mp3',
    'sound/mp3/4.mp3',
    'sound/mp3/5.mp3',
    'sound/mp3/6.mp3',
    'sound/mp3/7.mp3',
    'sound/mp3/8.mp3',
    'sound/mp3/9.mp3',
    'sound/mp3/10.mp3',
    ],
    mp3 : [
    'sound/mp3/1.mp3',
    'sound/mp3/2.mp3',
    'sound/mp3/3.mp3',
    'sound/mp3/4.mp3',
    'sound/mp3/5.mp3',
    'sound/mp3/6.mp3',
    'sound/mp3/7.mp3',
    'sound/mp3/8.mp3',
    'sound/mp3/9.mp3',
    'sound/mp3/10.mp3',
    'sound/mp3/1.mp3',
    'sound/mp3/2.mp3',

    ],
    ogg : [
    'sound/ogg/1.ogg',
    'sound/ogg/2.ogg',
    'sound/ogg/3.ogg',
    'sound/ogg/4.ogg',
    'sound/ogg/5.ogg',
    'sound/ogg/6.ogg',
    'sound/ogg/7.ogg',
    'sound/ogg/8.ogg',
    'sound/ogg/9.ogg',
    'sound/ogg/10.ogg',
    ],
    wav : [
    'sound/wav/note_1.wav', // Звук интерфейса
    'sound/wav/note_2.wav', // Сцена 1 - главная с паровозом
    'sound/wav/note_3.wav', // Сцена 2 - елка
    'sound/wav/note_4.wav', // Сцена 3 - еда
    'sound/wav/note_5.wav', // Сцена 4 - николай
    // На сцене 5 нет звуков при клике - там и так тут же проигрывается мелодия
    ]
  },
  text : {
    hint : {
      backColor : '0xe0ffeb', // цвет хинтов
      backAlpha : 0.85, // альфа хинтов
      ifaceBack : 'Повернутися назад',
      ifaceSubmit : 'Підтвердити выбір', 
      ifaceExit : 'Вийти з гри',
      cancel : 'Скасувати вібір',
      scene1kitchen : 'Вибір їжі',
      scene1nikolay : 'Друзі миколая',
      scene1tree : 'Наряджання ялинки',
      scene1music : 'Музикальна сцена',
      scene2bubbles : [
        'елка Candy',
        'елка Zoloto',
        'елка Soloma',
        'елка Folk',
        'елка Kids',
        'елка Cookie',
        'елка Skazka',
        'елка Glass'
        ],
      scene3meals : [
        'блюдо Fish',
        'блюдо Folk',
        'блюдо Meat',
        'блюдо Cakes',
        'блюдо Drink',
        'блюдо FastFood'
      ],
      scene4friends : [
        'друг заяц',
        'друг петух',
        'друг олень',
        'друг лев',
        'друг ангел1',
        'друг кузнечик',
        'друг крот',
        'друг ежик',
        'друг ангел2',
        'друг лиса',
        'друг коза',
        'друг сова',
        'друг киса',
        'друг собака'
      ],
      scene5music : [
        'описание музыки 1',
        'описание музыки 2',
        'описание музыки 3',
        'описание музыки 4',
        'описание музыки 5',
        'описание музыки 6',
        'описание музыки 7',
        'описание музыки 8',
        'описание музыки 9',
        'описание музыки 10',
        'описание музыки 11',
        'описание музыки 12'
      ]

    },
    font : '100px Arial',
    formTextStyle : {
      'font' : '30px Arial',
      'lineHeight' : 40,
      'fill' : 0x0a6287,
      'wordWrap' : true,
      'wordWrapWidth' : 1030-1030*0.2, // 10% margin from left and right
      'align' : 'center',
      //'stroke' : 'red',
      //'strokeThickness' : 30,     
      /*'dropShadow' : true,
      'dropShadowColor' : 'white', // can be #ffffff
      'dropShadowAngle' : Math.PI/2, // down
      'dropShadowDistance' : 2 */
      },
    smallFormTextStyle : {
      'font' : '30px Arial',
      'lineHeight' : 40,
      'fill' : 0x0a6287,
      'wordWrap' : true,
      'wordWrapWidth' : 774-774*0.2, // 10% margin from left and right
      'align' : 'center',
      //'stroke' : 'red',
      //'strokeThickness' : 30,     
      /*'dropShadow' : true,
      'dropShadowColor' : 'white', // can be #ffffff
      'dropShadowAngle' : Math.PI/2, // down
      'dropShadowDistance' : 2 */
      },
    logoTextStyle : {
      'font' : 'bold 20px Arial',
      'lineHeight' : 20,
      'fill' : 0x44f6e,
      'wordWrap' : true,
      'wordWrapWidth' : 150, // 10% margin from left and right
      'align' : 'left',
      'dropShadow' : true,
      'dropShadowColor' : 'white', // can be #ffffff
      'dropShadowAngle' : Math.PI/2, // down
      'dropShadowDistance' : 2 
    },
    userTextStyle : {
      'font' : 'bold 20px Arial',
      'lineHeight' : 20,
      'fill' : 0x44f6e,
      'wordWrap' : true,
      'wordWrapWidth' : 150, // 10% margin from left and right
      'align' : 'right',
      'dropShadow' : true,
      'dropShadowColor' : 'white', // can be #ffffff
      'dropShadowAngle' : Math.PI/2, // down
      'dropShadowDistance' : 2 
    },
    titleTextStyle : {
      'font' : 'bold 40px Arial',
      'lineHeight' : 40,
      'fill' : 0x44f6e,
      'align' : 'center',
      'wordWrap' : true,
      'wordWrapWidth' : 850, // 10
      'dropShadow' : true,
      'dropShadowColor' : 'white', // can be #ffffff
      'dropShadowAngle' : Math.PI/2, // down
      'dropShadowDistance' : 2 
    },
   descriptionTextStyle : {
      'font' : '20px Arial',
      'lineHeight' : 20,
      'fill' : 0x44f6e,
      'align' : 'center',
      'wordWrap' : true,
      'wordWrapWidth' : 500, // 10
      'dropShadow' : true,
      'dropShadowColor' : 'white', // can be #ffffff
      'dropShadowAngle' : Math.PI/2, // down
      'dropShadowDistance' : 2 
    },
    hintTextStyle : {
      'font' : '20px Arial',
      'lineHeight' : 20,
      'fill' : 0x44f6e,
      'align' : 'center',
      'wordWrap' : true,
      'padding' : 5,
      'wordWrapWidth' : 380, // 10
      'dropShadow' : false
    },
    
    // Имя игры у логотипа
    gameName : "Новий рік 2016 між двома дзвіницями",
    // Приветственный текст
    helloMessage : 'Вітаємо в грі. Можна грати, або слідкувати як падає сніжок на різних сценах',
    exitMessage : 'Шкода, шо ви так швидко йдете. Заходьте ще',
    completeMessage : 'Поздоровляємо - ви виграли. Дякуємо, що грали з нами. Приходьте наступного разу',

    maxFriends : 'Уже выбрано максимальное количество друзей, сначала удалите выбранного персонажа, нажав на нём', 
    maxFood : 'Вы выбрали максимальное количество блюд, отмените выбор одного из них для повторного выбора',

    // Тексты для верхнего интерфейса
    scene1Title : 'Новий рік: за двома зайцями',
    scene1Description : 'Оберіть локації кліком миші чи натисканням пальця на планшеті. Тільки не пальцем в небо',
    scene1Hello : 'Щоб побачити як вас звуть в грі, назву сцени, та ще купу бескорисного хламу, натисніть на кнопку "розгорнути."',
    scene2Title : 'Наряджання ялинки',
    scene2Description : 'Виберіть прикрасу для ялинки, яку ви бажаете бачити на мероприємстві',
    scene2Hello : 'Прикрасьте ялинку вибравши прикраси на ваш смак. Кнопка "обрати" стане активною як тільки ви щось виберите',
    scene3Title : 'Вибір їжі',
    scene3Description : 'Віберіть до трьох блюд в наявних на сцені',
    scene3Hello: 'Привіт! Виберіть три блюда, які вам до вподоби',
    scene4Title : 'Друзі Миколая',
    scene4Description: 'Виберіть шість друзів, з якими Миколай буде дружити',
    scene4Hello: 'Привіт! Виберіть шість друзів, з якими Миколай буде дружити. Тут ще текст, пояснюючий суть сцени',
    scene5Title : 'Музикальна сцена',
    scene5Description : 'Виберіть до трьох композицій, які ви бажаете прослухати'
  },
  iface : {
    readybutton_green : "textures/interface/ready_green.png",
    readybutton_gray : "textures/interface/ready_gray.png",
    back : "textures/interface/back_normal.png",
    backHover : "textures/interface/back_hover.png",
    backPressed : "textures/interface/back_pressed.png",
    exit : "textures/interface/exit.png",
    expand : "textures/interface/expand.png",
    formSubmit : "textures/interface/formsubmit_normal.png",
    formSubmitHover : "textures/interface/formsubmit_hover.png",
    formSubmitPressed : "textures/interface/formsubmit_pressed.png",
    plashka : "textures/interface/plashka.png",
    formBg : "textures/interface/formbg.png",
    smallFormBg : "textures/interface/smallformbg.png",
    submit : "textures/interface/submit_normal.png",
    submitHover : "textures/interface/submit_hover.png",
    submitInactive : "textures/interface/submit_inactive.png",
    submitPressed : "textures/interface/submit_pressed.png",
    folkLogo : "textures/interface/folk_logo.png",
    hintTexture : "textures/interface/hint.png",
    soundOn : "textures/interface/sound_on.png",
    soundOff : "textures/interface/sound_off.png",
    volumeOn : "textures/interface/volume-on.svg",
    volumeOnHover : "textures/interface/volume-on-hover.svg",
    volumeOff : "textures/interface/volume-off.svg",
    volumeOffHover : "textures/interface/volume-off-hover.svg"    
  },
  scene1 : {
  // главная сцена

    //background : 
    //background : "textures/scene1/noviy_rik_base_ground.png",
    background : "textures/scene1/noviy_rik_baza_off.jpg",
    //videoTrain : "video/train_anim.mp4",
    //videoTrain : "video/parovoz_i_karusel.mp4",
    videoTrain : "video/parovozkaruselnoalpha3.mp4",

    // nikolay
    nikolay : "textures/scene1/v2/nikolay2.png",
    nikolayHover : "textures/scene1/v2/nikolay2_hover.png",
    nikolayCompleted : "textures/scene1/v2/nikolay2_completed.png",

    // carousel
    //carousel : "textures/scene1/carousel.png",
    //carouselHover : "textures/scene1/carousel_hover.png",
    carouselCompleted : "textures/scene1/v2/carousel_completed.png",
    carouselHover : "textures/scene1/v2/carousel_hover.png",

    // eda
    eda : "textures/scene1/eda.png",

    //kitchen
    //kitchen : "textures/scene1/kitchen_light.png",
    //kitchenHover : "textures/scene1/kitchen_light_hover.png",
    //kitchenCompleted : "textures/scene1/kitchen_light_completed.png",
    kitchen : "textures/scene1/v2/kitchen.png",
    kitchenHover : "textures/scene1/v2/kitchen_hover.png",
    kitchenCompleted : "textures/scene1/v2/kitchen_completed.png",

    //tree
    tree : "textures/scene1/v2/elka.png",
    //treeHover : "textures/scene1/ctreeHover.png",
    //treeCompleted : "textures/scene1/ctree_blue.png",

    treeCandy : "textures/scene1/v2/elka_candy.png",
    treeZoloto : "textures/scene1/v2/elka_zoloto.png",
    treeSoloma : "textures/scene1/v2/elka_soloma.png",
    treeFolk : "textures/scene1/v2/elka_folk.png",
    treeKids : "textures/scene1/v2/elka_kids.png",
    treeCookie : "textures/scene1/v2/elka_cookie.png",
    treeSkazka : "textures/scene1/v2/elka_skazka.png",
    treeGlass : "textures/scene1/v2/elka_glass.png",

    sceneLight : "textures/scene1/v2/scene.png",
    sceneLightHover : "textures/scene1/v2/scene_hover.png",
    sceneLightCompleted : "textures/scene1/v2/scene_completed.png"
    
  },
  scene2 : { 
  // сцена с елкой
    tempbackground : "textures/temp/christmas_tree.png",
    background : "textures/scene2/down_town.png",
    
    bubble : "textures/scene2/bubble.png",
    bubbleFolk : "textures/scene2/bubble_folk.png",
    bubbleCandy : "textures/scene2/bubble_candy.png",
    bubbleZoloto : "textures/scene2/bubble_zoloto.png",
    bubbleSoloma : "textures/scene2/bubble_soloma.png",
    bubbleKids : "textures/scene2/bubble_kids.png",
    bubbleCookie : "textures/scene2/bubble_cookie.png",
    bubbleSkazka : "textures/scene2/bubble_skazka.png",
    bubbleGlass : "textures/scene2/bubble_glass.png",

    tree : "textures/scene2/tree.png",
    treeLight : "textures/scene2/tree_light.png",
    treeFolk : "textures/scene2/tree_folk.png",
    treeCandy : "textures/scene2/tree_candy.png",
    treeZoloto : "textures/scene2/tree_zoloto.png",
    treeSoloma : "textures/scene2/tree_soloma.png",
    treeKids : "textures/scene2/tree_kids.png", 
    treeCookie : "textures/scene2/tree_cookie.png",
    treeSkazka : "textures/scene2/tree_skazka.png",
    treeGlass : "textures/scene2/tree_glass.png"
  },
  scene3 : {
  // сцена с Едой
    background : "textures/scene3/kitchen_background.jpg",
    bubble : "textures/scene3/kitchen_bubble_icon.png",

    cakesFood : "textures/scene3/kitchen_cakes_food.png",
    drinkFood : "textures/scene3/kitchen_drink_food.png",
    fastfoodFood : "textures/scene3/kitchen_fastfood_food.png",
    fishFood : "textures/scene3/kitchen_fish_food.png",
    folkFood : "textures/scene3/kitchen_folk_food.png",
    meatFood : "textures/scene3/kitchen_meat_food.png",
    
    cakesIcon : "textures/scene3/kitchen_cakes_icon.png",
    drinkIcon : "textures/scene3/kitchen_drink_icon.png",
    fastfoodIcon : "textures/scene3/kitchen_fastfood_icon.png",
    fishIcon : "textures/scene3/kitchen_fish_icon.png",
    folkIcon : "textures/scene3/kitchen_folk_icon.png",
    meatIcon : "textures/scene3/kitchen_meat_icon.png"

  }, 
  scene4 : {
  // сцена с Николаем
    druziAngell : "textures/scene4/druzi_angell.png",
    druziAngelr : "textures/scene4/druzi_angelr.png",
    druziEjik : "textures/scene4/druzi_ejik.png",
    druziKisa : "textures/scene4/druzi_kisa.png",
    druziKoza : "textures/scene4/druzi_koza.png",
    druziKrot : "textures/scene4/druzi_krot.png",
    druziKuznechik : "textures/scene4/druzi_kuznechik.png",
    druziLev : "textures/scene4/druzi_lev.png",
    druziLisa : "textures/scene4/druzi_lisa.png",
    druziOlen : "textures/scene4/druzi_olen.png",
    druziPetuh : "textures/scene4/druzi_petuh.png",
    druziSobaka : "textures/scene4/druzi_sobaka.png",
    druziSova : "textures/scene4/druzi_sova.png",
    druziZayac : "textures/scene4/druzi_zayac.png",

    druziAngellIcon : "textures/scene4/druzi_angell_icon.png",    
    druziAngelrIcon : "textures/scene4/druzi_angelr_icon.png",
    druziEjikIcon : "textures/scene4/druzi_ejik_icon.png",    
    druziKisaIcon : "textures/scene4/druzi_kisa_icon.png",
    druziKozaIcon : "textures/scene4/druzi_koza_icon.png",
    druziKrotIcon : "textures/scene4/druzi_krot_icon.png",
    druziKuznechikIcon : "textures/scene4/druzi_kuznechik_icon.png",
    druziLevIcon : "textures/scene4/druzi_lev_icon.png",
    druziLisaIcon : "textures/scene4/druzi_lisa_icon.png",
    druziOlenIcon : "textures/scene4/druzi_olen_icon.png",
    druziPetuhIcon : "textures/scene4/druzi_petuh_icon.png",
    druziSobakaIcon : "textures/scene4/druzi_sobaka_icon.png",
    druziSovaIcon : "textures/scene4/druzi_sova_icon.png",
    druziZayacIcon : "textures/scene4/druzi_zayac_icon.png",

    bubble: "textures/scene4/druzi_bubble_icon.png",
    background: "textures/scene4/druzi_BG.jpg",
    background_nikolay: "textures/scene4/druzi_BG_front.png"
  },
  scene5 : {
  // сцена с Музыкой
    videoStart : "video/main_start.mp4",
    videoCycle : "video/main_cykle.mp4",
    ring : "textures/scene5/ring.png",
    loading : "textures/scene5/spinner100.png",
    
  // нужно для прелоада звуков - не убирать!

  // 17.11 уже не нужно...
  /*  preload1mp3 : 'sound/mp3/1.mp3',
    preload2mp3 : 'sound/mp3/2.mp3',
    preload3mp3 : 'sound/mp3/3.mp3',
    preload4mp3 : 'sound/mp3/4.mp3',
    preload5mp3 : 'sound/mp3/5.mp3',
    preload6mp3 : 'sound/mp3/6.mp3',
    preload7mp3 : 'sound/mp3/7.mp3',
    preload8mp3 : 'sound/mp3/8.mp3',
    preload9mp3 : 'sound/mp3/9.mp3',
    preload10mp3 : 'sound/mp3/10.mp3',
    //preaload11mp3 : 'sound/mp3/1.mp3', add these when you will add 11 and 12 mp3 and ogg
    //preaload12mp3 : 'sound/mp3/2.mp3',

    preload1ogg : 'sound/ogg/1.ogg',
    preload2ogg : 'sound/ogg/2.ogg',
    preload3ogg : 'sound/ogg/3.ogg',
    preload4ogg : 'sound/ogg/4.ogg',
    preload5ogg : 'sound/ogg/5.ogg',
    preload6ogg : 'sound/ogg/6.ogg',
    preload7ogg : 'sound/ogg/7.ogg',
    preload8ogg : 'sound/ogg/8.ogg',
    preload9ogg : 'sound/ogg/9.ogg',
    preload10ogg : 'sound/ogg/10.ogg', */
    //preaload11ogg : 'sound/mp3/1.ogg',
    //preaload12ogg : 'sound/mp3/2.ogg'
    preload1wav : 'sound/wav/note_1.wav', // Звук интерфейса
    preload2wav : 'sound/wav/note_2.wav', // Сцена 1 - главная с паровозом
    preload3wav : 'sound/wav/note_3.wav', // Сцена 2 - елка
    preload4wav : 'sound/wav/note_4.wav', // Сцена 3 - еда
    preload5wav : 'sound/wav/note_5.wav'

  },
  snow : {
    baseTexture : "textures/snowparticles/snowparticle2.png",
    advanceTexture : "textures/snowparticles/snowparticle-round.png"
    //advanceTexture :  "textures/snowparticles/32snow.png" 
  },
  /*star : {
    beginTexture : "textures/star/star_00",
    // there are calculations - see star.js for full information
    endTexture : ".png"
  },*/ 
  star : function() {
    var stars = [],
        i;
    for (i = 107; i < 216; i++) {
      var textureName = "textures/star/star_00" + i + ".png";
      stars.push(textureName);
    }
    return stars;
  },
  zvezda : function() {
    var stars = [],
        i,
        textureName;
    for(i = 0; i < 248; i++) {
      textureName = "textures/zvezdopad/z9_1_" + pad(i,5) + ".png";
      stars.push(textureName);      
    }
    return stars;
  },
  zvezdopad : function() {
    var stars = [],
        i,
        textureName;
    for(i = 0; i < 45; i++) {
      textureName = "textures/zvezdopad2/zvezdopad_" + pad(i,5) + ".png";
      stars.push(textureName);      
    }
    return stars;
  },
  smoke : function() {
    var stars = [],
        i,
        textureName;
    for(i = 0; i < 28; i++) {
      textureName = "textures/smoke/smoke_" + pad(i,5) + ".png";
      stars.push(textureName);      
    }
    //console.log(stars);
    return stars;
  },
  newSmoke : function() {
    var stars = [],
    i,
    textureName;
    for(i = 0; i < 28; i++) {
      textureName = "textures/smoke_new/smoke_" + pad(i,5) + ".png";
      stars.push(textureName);      
    }
    //console.log(stars);
    return stars;

  },
  hover : function() {
    var stars = [],
    i,
    textureName;
    for(i = 0; i < 64; i++) {
      textureName = "textures/effect_new/effect_" + pad(i,5) + ".png";
      stars.push(textureName);      
    }
    //console.log(stars);
    return stars;
  }
};

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');

gulp.task('compress', function() {
  gulp.src([

  'js/rAF.js',
  'js/ready.js',
  'js/stats.min.js',
  'js/pixi.js',
  'js/pixihacks.js',
  'js/utils.js',
  'js/assetsloader.js',
  'js/background.js',
  'js/user.js',
  'js/howler.min.js',
  'js/interface/ibuttons.js',
  'js/interface/ibuttonchoose.js',
  'js/interface/ibuttonback.js',
  'js/interface/ibuttonface.js',
  'js/interface/iform.js',
  'js/interface/iplashka.js',
  'js/interface/itext.js',
  'js/interface/igameface.js',
  'js/interface/ihint.js',
  'js/interface/soundcontrol.js',
  'js/effects/star.js',
  'js/effects/zvezda.js',
  'js/effects/zvezdopad.js',
  'js/effects/smoke.js',
  'js/effects/hovereffect.js',
  'js/scene1/carousel.js',
  'js/scene1/train.js',
  'js/scene1/kitchen.js',
  'js/scene1/eda.js',
  'js/scene1/tree.js',
  'js/scene1/soundscene.js',
  'js/scene1/nikolay.js',
  'js/scene1/branding.js',  
  'js/scene2/maintree.js',
  'js/scene2/treelight.js',
  'js/scene2/treedecoration.js',
  'js/scene2/bubble.js',
  'js/scene2/decoration.js',
  'js/scene3/bubble2.js',
  'js/scene3/foodIcon.js',
  'js/scene3/selectedFood.js',
  'js/scene4/bubble3.js',
  'js/scene4/friendIcon.js',
  'js/scene4/selectedFriend.js',
  'js/scene4/friendHint.js',
  'js/scene5/videobackground.js',
  'js/scene5/videosprite.js',
  'js/scene5/soundselector.js',
  'js/scene5/soundloader.js',
  'js/scene.js',
  'js/scene2.js',
  'js/scene3.js',
  'js/scene4.js',
  'js/scene5.js',
  'js/game.js',
  'js/gameevents.js'

  ])
    .pipe(concat('app5.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});
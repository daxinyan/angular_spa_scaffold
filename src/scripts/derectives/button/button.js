/**
 * Created by li_sj on 2016/5/11.
 */
angular.module('app.ui').directive('btn', [function () {
     return {
         restrict:"AE",
         require:'^ngModel',
         template:"<div>this is a button for {{ordername}}</div>",
         scope: {
             ngModel: '=',  //����������
             city:'@'
         },
         link: function(scope, iElements, iAttrs){
             console.dir(iAttrs);
         }
         //scope: true   //�̳и���������
     }
}]);
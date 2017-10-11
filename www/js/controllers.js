angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {


    }
)

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
    $scope.firsts = function(data){
        angular.forEach(data, function(vl,kl){
            var a = {name:vl.name};
            if(vl.children){
                a.children = vl.children;
                angular.forEach(a.children, function(v,k){
                    $scope.add(v,vl);
                })
            };
        });
    };

    $scope.add = function(data,parent){
        data.parent = parent;
        angular.forEach(data.children, function(v,k){
            $scope.add(v,data);
        });
    };

    $scope.changeData = function(data, tree) {
        if (data.children) {
            if(data.children.length > 0){
                data.children.filter(function(v, k) {
                    v.check = data.check;
                    if (v.children) {
                        $scope.changeData(v,tree);
                    }
                });
            }
        }
    };

    $scope.changeUp = function(data){
        if(data.parent){
            var a = data.parent.children.filter(function(v,k){
                return v.check;
            }).length;

            if(data.parent.check && data.parent.children.length > 1){
                data.parent.check = (a > 0);
            }else{
                data.parent.check = data.check;
            }

            if(a==data.parent.children.length){
                data.parent.check = true;
                $scope.changeUp(data.parent);
                return;
            }else if(a==0){
                data.parent.check = false;
                $scope.changeUp(data.parent);
                return;
            }
            $scope.changeUp(data.parent);
        }
    }

    function getChecked(data){
        angular.forEach(data.children, function(v,k){
            if(v.check){
                $scope.listText += v.name+',';
                if(v.children){
                  var a = v.children.filter(function(vl,kl){
                  return vl.check;
                });
                if(a.length == v.children.length){

                }else{
                  getChecked(v);
                }
                }
            }
        })
    };

    $scope.getList = function(){
        $scope.listText = '';
        angular.forEach($scope.tree, function(v,k){
            if(v.check){
                $scope.listText += v.name+',';
                if(v.children){
                  var a = v.children.filter(function(vl,kl){
                    return vl.check;
                  });
                  if(a.length == v.children.length){

                  }else{
                    getChecked(v);
                  }
                }
            }
        });
    };

    $scope.process = function(){
        //$scope.tree = $scope.datos;
        $scope.tree = angular.copy(JSON.parse($scope.in));
        $scope.firsts($scope.tree);
        $scope.url = 'templates/tree_container.html';
    };

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

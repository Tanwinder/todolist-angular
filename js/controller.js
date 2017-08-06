angular.module("myApp")
    .controller("myCtrl",myController);

function myController($scope){
    $scope.arrList =[{
        addData:"book",
        done:false
    },
        {
            addData:"pen",
            done:false
        }];

    $scope.listAdd = function() {
        if ($scope.myInput != "" && $scope.myInput != null ) {
            $scope.arrList.push({addData: $scope.myInput, done: false});
            $scope.myInput = "";
        }
    }
    $scope.deleteItems = function(){
        var oldList = $scope.arrList;
        $scope.arrList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done){
                $scope.arrList.push(x);
            }
        });
    };
}
smartPAR.controller('DatatablesCtrl', DatatablesCtrl);

function DatatablesCtrl(DTOptionsBuilder, DTColumnBuilder, $rootScope) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromSource()
        .withPaginationType('full_numbers')
        // Active Responsive plugin
        .withOption('responsive', true)
        .withBootstrap();
}
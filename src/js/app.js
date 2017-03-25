(function($) {

    var ctx = document.getElementById("myChart");
    var select = document.getElementById("province")
    var data = [];

    $.getJSON('../data.json', function(data) {
        console.log(data);
        for(var i = 0; i < 1; i++) {
            data = [
                    data[i].ปล้น,
                    data[i].ชิงทรัพย์,
                    data[i].โจรกรรม,
                    data[i].วางระเบิด,
                    data[i].ยิง,
                    data[i].วิ่งราว,
                    data[i].การพนัน,
                    data[i].ขโมย,
                    data[i].ความรุนแรง,
                    data[i].ก่อการร้าย
                  ];


                   var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                        datasets: [{
                            data: data,
                            backgroundColor: [
                                "#2980b9",
                                "#4BC0C0",
                                "#FFCE56",
                                "#E7E9ED",
                                "#16a085",
                                "#e74c3c",
                                "#e67e22",
                                "#f1c40f",
                                "#9b59b6",
                                "#FFFFFF"
                            ],
                            label: "อัตราการเกิดเหตุ" // for legend
                        }],
                        labels: [
                            "ปล้น",
                            "ฆ่า",
                            "ชิงทรัพย์",
                            "วางระเบิด",
                            "ยิง",
                            "วิ่งราว",
                            "การพนัน",
                            "ขโมย",
                            "ความรุนแรง",
                            "ก่อการร้าย"
                        ]
                    }

                });
        }
    });

    province.onchange = function(){
        var self = this;

        $.getJSON('../data.json', function(data) {

          for(var i = 0; i < data.length; i++) {
              
              if(data[i].province == self.value) {
                

                  data = [
                    data[i].ปล้น,
                    data[i].ชิงทรัพย์,
                    data[i].โจรกรรม,
                    data[i].วางระเบิด,
                    data[i].ยิง,
                    data[i].วิ่งราว,
                    data[i].การพนัน,
                    data[i].ขโมย,
                    data[i].ความรุนแรง,
                    data[i].ก่อการร้าย
                  ];


                   var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                        datasets: [{
                            data: data,
                            backgroundColor: [
                                "#2980b9",
                                "#4BC0C0",
                                "#FFCE56",
                                "#E7E9ED",
                                "#16a085",
                                "#e74c3c",
                                "#e67e22",
                                "#f1c40f",
                                "#9b59b6",
                                "#FFFFFF"
                            ],
                            label: "อัตราการเกิดเหตุ" // for legend
                        }],
                        labels: [
                            "ปล้น",
                            "ชิงทรัพย์",
                            "วางระเบิด",
                            "ยิง",
                            "วิ่งราว",
                            "การพนัน",
                            "ขโมย",
                            "ความรุนแรง",
                            "ก่อการร้าย"
                        ]
                    }

                });
                  
                  break;
              }
          }
        });

        // data = [11,16,7,3,14]
    }


Chart.defaults.global.defaultFontColor = "#fff";

})(jQuery)
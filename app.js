$(document).ready(function () {
    $('#btnSubmit').prop('disabled', true)

    $('#txtHere').keypress(function () {
        $('#btnSubmit').prop('disabled', false)

    });

    $('#btnSubmit').click(function () {
        let txtValue = $('#txtHere').val();
        alert(txtValue)

        $('body').append('<div id="myDiv"> </div>')
        $('body').append('<ul id ="myList"> </ul>')

        li = $(`<li>${txtValue}</li>`)
        $('#myList').append(li)
        $('#myDiv').append($('#myList'))

        li.click(function () {
            let colorList = ['Red', 'Blue', 'Yellow', 'Green', 'Black', 'Brown', 'Purple', 'Pink', 'Orange'];
            let randomIndex = Math.floor(Math.random() * colorList.length)
            $(this).css('color', colorList[randomIndex])
        });

        li.dblclick(function () {
            $(this).remove();
        });
    });
});
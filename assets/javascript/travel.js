const locations = [
    {
        idName: "#location-01",
        name: "VQG Vũ Quang"
    },
    {
        idName: "#location-02",
        name: "Núi Hồng Lĩnh"
    },
    {
        idName: "#location-03",
        name: "Khu tưởng niệm Nguyễn Du"
    },
    {
        idName: "#location-04",
        name: "Hồ Kẻ Gỗ"
    },
    {
        idName: "#location-05",
        name: "Biển Thiên Cầm"
    }
]

const details = [
    {
        idName: "#vq-national-park",
        name: "VQG Vũ Quang"
    },
    {
        idName: "#hl-mountain",
        name: "Núi Hòng Lĩnh"
    },
    {
        idName: "#nd-memorial-site",
        name: "Khu tưởng niệm Nguyễn Du"
    },
    {
        idName: "#kg-lake",
        name: "Hồ Kẻ Gỗ"
    },
    {
        idName: "#tc-beach",
        name: "Biển Thiên Cầm"
    }
]

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const locationTravel = function() {
    locations.forEach((location, index) => {
        $(`${location.idName}`).onclick = function() {
            $(`${details[index].idName}`).style.display = 'flex'
        }
    })
}

locationTravel();

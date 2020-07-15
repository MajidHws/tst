function showContent(showId) {
    var containers = [
        'home', 'accountInfo', 'booking', 'password', 'payment', 'calendar',
        'following', 'reviews', 'messages', 'help', 'document', 'outTrips',
        'myCompany', 'customers', 'settings'
    ]

    var childContainers = [
        'personalInfo', 'companyInfo', 'personalPassword'
    ]

    for (i in childContainers) {

        var child = document.getElementById(childContainers[i])
        child.style.display = "none"

    }

    for (i in containers) {

        if (containers[i] === showId) {
            if (containers[i] === 'settings') {
                document.getElementById('settingsList').style.display = 'block'
                document.getElementById('personalInfo').style.display = 'block'
            } else {
                document.getElementById('settingsList').style.display = 'none'
            }
            var container = document.getElementById(containers[i])
            container.style.display = "block"
        } else {
            var container = document.getElementById(containers[i])
            container.style.display = "none"
        }
    }

}

function addActiveClass(item, containerId) {
    if (!item) return
    var className = 'active-item'
    var descendants = item.parentNode.children;
    for (i in descendants) {
        if (descendants[i].classList) descendants[i].classList.remove(className)
    }
    item.classList.add(className)
    showContent(containerId)
}


function showChileContent(showId) {
    var containers = [
        'home', 'accountInfo', 'booking', 'password', 'payment', 'calendar',
        'following', 'reviews', 'messages', 'help', 'document', 'outTrips',
        'myCompany', 'customers', 'settings', 'personalInfo', 'companyInfo', 'personalPassword'
    ]

    for (i in containers) {
        if (containers[i] === showId) {
            var container = document.getElementById(containers[i])
            container.style.display = "block"
        } else {
            var container = document.getElementById(containers[i])
            container.style.display = "none"
        }
    }

}

showContent('home')
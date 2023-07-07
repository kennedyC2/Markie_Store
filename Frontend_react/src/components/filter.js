// Sort according to clicks
export const sortData = (category, brand, color, sex, size) => {

    // sort by brand
    if (brand && !color && !sex && !size) {
        return category.map((item) => {
            return item.category === brand
        })
    }

    // sort by brand && color
    if (brand && color && !sex && !size) {
        return category.map((item) => {
            return item.category === brand && item.dColor === color
        })
    }

    // sort by brand && color && sex
    if (brand && color && sex && !size) {
        return category.map((item) => {
            return item.category === brand && item.dColor === color && item.sex === sex
        })
    }

    // sort by brand && color && sex && size
    if (brand && color && sex && size) {
        return category.map((item) => {
            return item.category === brand && item.dColor === color && item.sex === sex && item.sizes.hasOwnProperty(size)
        })
    }

    // ==========================================================

    // sort by color
    if (color && !brand && !sex && !size) {
        return category.map((item) => {
            return item.dColor === color
        })
    }

    // sort by color && sex
    if (color && !brand && sex && !size) {
        return category.map((item) => {
            return item.dColor === color && item.sex === sex
        })
    }

    // sort by color && size
    if (color && !sex && size && !brand) {
        return category.map((item) => {
            return item.dColor === color && item.sizes.hasOwnProperty(size)
        })
    }

    // sort by color && sex && size
    if (color && !brand && sex && size) {
        return category.map((item) => {
            return item.dColor === color && item.sex === sex && item.sizes.hasOwnProperty(size)
        })
    }

    // ==============================================================

    // sort by sex
    if (sex && !color && !brand && !size) {
        return category.map((item) => {
            return item.sex === sex
        })
    }

    // sort by sex && brand
    if (sex && !color && brand && !size) {
        return category.map((item) => {
            return item.category === brand && item.sex === sex
        })
    }

    // sort by sex && size
    if (sex && !color && !brand && size) {
        return category.map((item) => {
            return item.sex === brand && item.sex === sex && item.sizes.hasOwnProperty(size)
        })
    }

    // sort by sex && brand && size
    if (sex && !color && brand && size) {
        return category.map((item) => {
            return item.category === brand && item.sex === sex && item.sizes.hasOwnProperty(size)
        })
    }

    // ==============================================================

    // sort by size
    if (size && !sex && !color && !brand) {
        return category.map((item) => {
            return item.sizes.hasOwnProperty(size)
        })
    }

    // sort by size && brand
    if (size && !sex && !color && brand) {
        return category.map((item) => {
            return item.category === brand && item.sizes.hasOwnProperty(size)
        })
    }

    // sort by size && color && brand
    if (size && !sex && color && brand) {
        return category.map((item) => {
            return item.category === brand && item.dColor === color && item.sizes.hasOwnProperty(size)
        })
    }
}
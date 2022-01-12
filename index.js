function superbowlWin(objArr) {

    let record = objArr.find((record) => record.result === "W")

    return record ? record.year : undefined
}

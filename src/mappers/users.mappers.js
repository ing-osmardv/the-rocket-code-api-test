const createUserInputMapper = ( input) => {
    const user = {
        first_name: input.firstName || null,
        second_name: input?.secondName || null,
        last_name: input.lastName || null,
        mother_last_name: input?.motherLastName || null,
        birth_date: `${input.day}/${input.month}/${input.year}` || null,
        email: input.email || null,
        phone_number: input.phoneNumber || null,
    }

    return user;
}

module.exports = {
    createUserInputMapper
}
export const slugify = (value) => {
    const strippedName = value.replace(' ', '');
    return `${strippedName.toLowerCase()}`;
}

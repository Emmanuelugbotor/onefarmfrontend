
export const  pagination = (pageSize,data, currentPage)=> {
    const pageTotal = data.length;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
    return  data.slice(startIndex, endIndex);
}
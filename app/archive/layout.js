const ArchiveLayout =({archive,latest})=>{
    return(
        <>
        <h1>News Article</h1>
        <section > {archive}</section>
        <section>{latest}</section>
        </>
    )
}

export default ArchiveLayout;
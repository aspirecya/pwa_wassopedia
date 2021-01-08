import Heading from '../components/Heading'

const Home = ({ children, ...props }) => {

    return (
        <>
            <Heading level={1}>
                Welcome to Wassopedia
            </Heading>
        </>
    );
};

export default Home;
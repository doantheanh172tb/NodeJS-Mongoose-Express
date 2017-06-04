const baseController = {};

baseController.get = (req, res) => {
    res.json({
        message: 'Welcome to our App!',
    });
};

export default baseController;
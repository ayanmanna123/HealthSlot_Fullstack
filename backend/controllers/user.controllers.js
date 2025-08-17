import User from "../model/UserModel.js";

export const updateprofilr = async (req, res) => {
  try {
    const { age, location, role, phoneNumber } = req.body;

    if (!age || !location || !role || !phoneNumber) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // find user by auth0Id
    let user = await User.findOne({ auth0Id: req.oidc.user.sub });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    // update only the provided fields
    user.age = age;
    user.location = location;
    user.role = role;
    user.phoneNumber = phoneNumber;

    // save changes
    await user.save();

    return res.status(200).json({
      message: "User updated successfully",
      user,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};



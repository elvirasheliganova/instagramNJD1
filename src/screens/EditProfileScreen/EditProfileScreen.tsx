import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {useForm, Controller, Control} from 'react-hook-form';
import {IUser} from '../../types/models';

const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  label: string;
  multiline?: boolean;
  control: Control<IEditableUser, object>;
  name: IEditableUserField;
  rules?: object;
}

const CustomInput = ({
  label,
  multiline = false,
  control,
  name,
  rules = {},
}: ICustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
        console.log('Errors');
        console.log(error);
        return (
          <View style={styles.inputContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>{label}</Text>
            </View>
            <View style={{flex: 1}}>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={label}
                style={[
                  styles.input,
                  {borderColor: error ? colors.error : colors.borderColor},
                ]}
                multiline={multiline}
              />
              {error && (
                <Text style={{color: colors.error}}>
                  {error.message || 'Error'}
                </Text>
              )}
            </View>
          </View>
        );
      }}
    />
  );
};

const EditProfileScreen = () => {
  const [selectedImage, setSelectedImage] = useState<null | Asset>(null);
  const {
    control,
    handleSubmit,
    //formState: {errors},
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });

  const onSubmit = (data: IEditableUser) => console.log('Submit!', data);
  // console.log(errors);
  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedImage(assets[0]);
        }
      },
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.page}>
        <Image
          source={{uri: selectedImage?.uri || user.image}}
          style={styles.avatar}
        />
        <Text onPress={onChangePhoto} style={styles.textButton}>
          Change profile photo
        </Text>

        <CustomInput
          name="name"
          control={control}
          rules={{required: 'Name is required'}}
          label="Name"
        />
        <CustomInput
          name="username"
          control={control}
          rules={{
            required: 'Userame is required',
            minLength: {
              value: 3,
              message: 'Username should be more than 3 character',
            },
          }}
          label="Username"
        />
        <CustomInput
          name="website"
          control={control}
          rules={{
            pattern: {
              value: URL_REGEX,
              message: 'Invalid URL',
            },
          }}
          label="Website"
        />
        <CustomInput
          name="bio"
          control={control}
          rules={{
            required: 'Bio is required',
            maxLength: {
              value: 3,
              message: 'Username should not be more than 30 character',
            },
          }}
          label="Bio"
          multiline
        />

        <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
          Submit
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 100,
  },
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    margin: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginBottom: 15,
  },
  labelContainer: {
    justifyContent: 'flex-end',
  },
  label: {
    width: 75,
    color: colors.grey,
    //backgroundColor: 'blue',

    // alignSelf: 'center',
  },
  input: {
    borderColor: colors.borderColor,
    borderBottomWidth: 1,
    //flex: 1,
    //backgroundColor: 'pink',
    //alignSelf: 'center',
  },
});
export default EditProfileScreen;

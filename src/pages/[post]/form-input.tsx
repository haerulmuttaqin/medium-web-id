import React, {Fragment, useEffect, useState} from 'react';
import Button from '@atlaskit/button/new';
import Form, {ErrorMessage, Field, FormSection,} from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import LinkIcon from '@atlaskit/icon/core/link';
import secureLocalStorage from "react-secure-storage";
import {useRouter} from "next/router";
import {isValidDomain, isValidURL} from "@utils/utils";

const FormInput = () => {
    const router = useRouter()
    const [isLogin, setIsLogin] = useState<boolean>()

    const handleSignUp = () => {
        if (isLogin) {
            router.push("/bookmarks")
        } else {
            router.push("/auth")
        }
    }

    useEffect(() => {
        setIsLogin(secureLocalStorage.getItem("is_login") as any)
    }, []);

    const handleGetData = async (params: any) => {
        if (isValidDomain(params.url)) {
            await router.push(`/${[params.url.replace(/^.*\/\/[^\/]+/, '')]}`)
        } else {
            return {
                url: "invalid url"
            }
        }
    }
    return (
        <div
            style={{
                display: 'flex',
                width: '700px',
                maxWidth: '100%',
                margin: '0 auto',
                flexDirection: 'column',
            }}
        >
            <Form<{ url: string; }>
                onSubmit={handleGetData}
            >
                {({formProps, submitting}) => (
                    <form {...formProps}>
                        <FormSection>
                            <Field
                                aria-required={true}
                                name="url"
                                isRequired
                            >
                                {({fieldProps, error}) => (
                                    <Fragment>
                                        <TextField placeholder={"Medium article URL"}
                                                   autoComplete="off" {...fieldProps}
                                                   isDisabled={submitting}
                                                   elemBeforeInput={<span style={{paddingInline: "10px"}}><LinkIcon
                                                       label={"link"}/></span>}/>
                                        {error && (
                                            <ErrorMessage>please input valid medium post url</ErrorMessage>
                                        )}
                                    </Fragment>
                                )}
                            </Field>
                        </FormSection>
                        <br/>
                        <Button type="submit" appearance="primary" isLoading={submitting}>
                            Read Article Now
                        </Button>
                    </form>
                )}
            </Form>
        </div>
    )
};

export default FormInput;
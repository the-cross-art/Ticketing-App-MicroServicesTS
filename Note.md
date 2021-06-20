kubectl delete all --all

##To create JWT-Secret Key
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
